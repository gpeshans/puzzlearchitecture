import * as React from 'react';
import { graphql } from 'gatsby';
import { ProjectItem } from '../data';
import { Page } from '../components/page';

interface TemplateProps {
  data: {
    allSitePage: {
      edges: {
        node: {
          context: ProjectItem;
        };
      }[];
    };
  };
}

const Template = ({ data }: TemplateProps) => {
  const project = data.allSitePage.edges[0].node.context;
  // TODO: GP - implement item details component
  return <Page title={project.name}>{JSON.stringify(project)}</Page>;
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

export default Template;
