import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Page } from '../components/page';
import { Row } from '../components/grid';
import { ProjectsListQuery, renderProjectsDataList } from '../data';

const Interiors = () => {
  const data = useStaticQuery<ProjectsListQuery>(graphql`
    query {
      allSitePage(
        filter: { context: { name: { ne: null }, category: { eq: "interiors" } } }
        sort: { fields: context___year, order: DESC }
      ) {
        edges {
          node {
            context {
              category
              description
              images
              location
              name
              surface
              titleImage
              year
            }
          }
        }
      }
    }
  `);

  return (
    <Page title="Interiors">
      <Row>{renderProjectsDataList(data)}</Row>
    </Page>
  );
};

export default Interiors;
