import * as React from 'react';
import { graphql } from 'gatsby';

import { Page } from '../components/page';
import { Row, Column } from '../components/grid';
import { Image } from '../components/image';
import { ProjectsListQuery } from '../data';
import './itemTemplate.scss';
import { Breadcrumbs } from '../components/breadcrumbs';

interface TemplateProps {
  data: ProjectsListQuery;
}

const ItemTemplate = ({ data }: TemplateProps) => {
  const project = data.allSitePage.edges[0].node.context;
  return (
    <Page title={project.name} className="pz-ItemTemplate">
      <Breadcrumbs />
      <Row>
        <Column spanSm={12} spanMd={12} spanLg={4} spanXl={3} className="pz-ItemTemplate__Metadata">
          <Row className="pz-ItemTemplate__Title">{project.name}</Row>
          <Row className="pz-ItemTemplate__Field">
            <Column className="pz-ItemTemplate__Field__Label">Categories</Column>
            <Column className="pz-ItemTemplate__Field__Value">{project.category.join(', ')}</Column>
          </Row>
          <Row className="pz-ItemTemplate__Field">
            <Column className="pz-ItemTemplate__Field__Label">Location</Column>
            <Column className="pz-ItemTemplate__Field__Value">{project.location}</Column>
          </Row>
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
              <Column className="pz-ItemTemplate__Field__Value">{project.description}</Column>
            </Row>
          ) : null}
        </Column>
        <Column spanSm={12} spanMd={12} spanLg={8} spanXl={9}>
          <Row>
            <Column className="pz-ItemTemplate__Image">
              <Image filename={project.titleImage} />
            </Column>
          </Row>
          {project.images.map((image) => (
            <Row key={image}>
              <Column className="pz-ItemTemplate__Image">
                <Image filename={image} />
              </Column>
            </Row>
          ))}
        </Column>
      </Row>
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
  }
`;

export default ItemTemplate;
