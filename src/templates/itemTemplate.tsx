import * as React from 'react';
import { graphql } from 'gatsby';

import { Page } from '../components/page';
import { Row, Column } from '../components/grid';
import { Image } from '../components/image';
import { ProjectsListQuery } from '../data';
import './itemTemplate.scss';

interface TemplateProps {
  data: ProjectsListQuery;
}

const ItemTemplate = ({ data }: TemplateProps) => {
  const project = data.allSitePage.edges[0].node.context;
  return (
    <Page title={project.name} className="pz-ItemTemplate">
      <Row>
        <Column className="pz-ItemTemplate__Title">{project.name}</Column>
      </Row>
      <Row>
        <Column spanSm={12} spanMd={4} spanLg={3} spanXl={3}>
          <Row className="pz-ItemTemplate__Field">
            <Column className="pz-ItemTemplate__Field__Label">Location</Column>
            <Column className="pz-ItemTemplate__Field__Value">{project.location}</Column>
          </Row>
          <Row className="pz-ItemTemplate__Field">
            <Column className="pz-ItemTemplate__Field__Label">Year</Column>
            <Column className="pz-ItemTemplate__Field__Value">{project.year}</Column>
          </Row>
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
        <Column spanSm={12} spanMd={8} spanLg={9} spanXl={9}>
          <Row className="pz-ItemTemplate__Image">
            <Column>
              <Image filename={project.titleImage} />
            </Column>
          </Row>
          {project.images.map(image => (
            <Row key={image} className="pz-ItemTemplate__Image">
              <Column>
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
            titleImage
            images
            surface
            description
          }
        }
      }
    }
  }
`;

export default ItemTemplate;
