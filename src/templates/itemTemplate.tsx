import * as React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import * as _ from 'lodash';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import { Page } from '../components/page';
import { Row, Column } from '../components/grid';
import { Breadcrumbs } from '../components/breadcrumbs';
import { ProjectsListQuery, ImageNode } from '../data';
import './itemTemplate.scss';

interface TemplateProps {
  data: ProjectsListQuery;
  path: string;
}

const ItemTemplate = ({ data, path }: TemplateProps) => {
  const project = data.allSitePage.edges[0].node.context;
  const images: {
    title: string;
    node: ImageNode;
  }[] = [];

  // map image nodes
  project.images.forEach((imageFilename) => {
    const imageEdge = data.images.edges.find((edge) => {
      return edge.node.relativePath.includes(imageFilename);
    });
    if (imageEdge) {
      images.push({
        title: imageFilename,
        node: imageEdge.node,
      });
    }
  });

  const imageSources = images.map((image) => image.node.childImageSharp.fluid.src);
  const [galleryIndex, setGalleryIndex] = React.useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = React.useState(false);
  const prevIndex = galleryIndex - (1 % imageSources.length);
  const nextIndex = (galleryIndex + imageSources.length + 1) % imageSources.length;

  return (
    <Page
      seoProps={{ title: project.name, description: project.description, path, imageSrc: imageSources[0] }}
      className="pz-ItemTemplate"
    >
      <Breadcrumbs />
      <Row>
        <Column spanSm={12} spanMd={12} spanLg={4} spanXl={4} className="pz-ItemTemplate__Metadata">
          <Row className="pz-ItemTemplate__Title">{project.name}</Row>
          <Row className="pz-ItemTemplate__Field">
            <Column className="pz-ItemTemplate__Field__Label">Categories</Column>
            <Column className="pz-ItemTemplate__Field__Value">{project.category.join(', ')}</Column>
          </Row>
          {project.location ? (
            <Row className="pz-ItemTemplate__Field">
              <Column className="pz-ItemTemplate__Field__Label">Location</Column>
              <Column className="pz-ItemTemplate__Field__Value">{project.location}</Column>
            </Row>
          ) : null}
          <Row className="pz-ItemTemplate__Field">
            <Column className="pz-ItemTemplate__Field__Label">Year</Column>
            <Column className="pz-ItemTemplate__Field__Value">{project.year}</Column>
          </Row>
          {project.status ? (
            <Row className="pz-ItemTemplate__Field">
              <Column className="pz-ItemTemplate__Field__Label">Status</Column>
              <Column className="pz-ItemTemplate__Field__Value">{project.status}</Column>
            </Row>
          ) : null}
          {project.surface ? (
            <Row className="pz-ItemTemplate__Field">
              <Column className="pz-ItemTemplate__Field__Label">Surface</Column>
              <Column className="pz-ItemTemplate__Field__Value">
                {`${project.surface} m`}
                <sup>2</sup>
              </Column>
            </Row>
          ) : null}

          {project.description ? (
            <Row className="pz-ItemTemplate__Field">
              <Column className="pz-ItemTemplate__Field__Label">Description</Column>
              <Column className="pz-ItemTemplate__Field__Value pz-ItemTemplate__Field__Value__Description">
                {project.description}
              </Column>
            </Row>
          ) : null}
        </Column>
        <Column spanSm={12} spanMd={12} spanLg={6} spanXl={6} offset={0} offsetMd={0} offsetLg={1} offsetXl={1}>
          {images.map((image, index) => (
            <React.Fragment key={index}>
              <Row>
                <Column
                  onClick={() => {
                    setIsGalleryOpen(true);
                    setGalleryIndex(index);
                  }}
                >
                  <div className="pz-ItemTemplate__Image">
                    <Img
                      alt={image.title}
                      fluid={image.node.childImageSharp.fluid}
                      imgStyle={{ objectFit: 'contain', objectPosition: 'center top' }}
                      fadeIn={true}
                    />
                    <div className="pz-ItemTemplate__Image-overlay">
                      <div className="pz-ItemTemplate__Image-overlay-text">+</div>
                    </div>
                  </div>
                </Column>
              </Row>
            </React.Fragment>
          ))}
        </Column>
      </Row>
      {isGalleryOpen && (
        <Lightbox
          mainSrc={imageSources[galleryIndex]}
          nextSrc={imageSources[nextIndex]}
          prevSrc={imageSources[prevIndex]}
          onCloseRequest={() => {
            setIsGalleryOpen(false);
          }}
          onMovePrevRequest={() => setGalleryIndex(prevIndex)}
          onMoveNextRequest={() => setGalleryIndex(nextIndex)}
          imageTitle={images[galleryIndex].title}
          imageLoadErrorMessage="Image loading failed! Try to reload."
        />
      )}
    </Page>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    allSitePage(filter: { path: { eq: $path } }) {
      edges {
        node {
          context {
            name
            category
            location
            year
            status
            surface
            titleImage
            images
            description
          }
        }
      }
    }
    images: allFile(filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" } }) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
      }
    }
  }
`;

export default ItemTemplate;
