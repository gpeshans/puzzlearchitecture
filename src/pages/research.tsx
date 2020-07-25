import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Page } from '../components/page';
import { Row } from '../components/grid';
import { ProjectsListQuery, renderProjectsDataList } from '../data';

const Research = () => {
  const data = useStaticQuery<ProjectsListQuery>(
    graphql`
      query {
        allSitePage(
          filter: { context: { name: { ne: null }, category: { in: ["research"] } } }
          sort: { fields: context___year, order: DESC }
        ) {
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
    `,
  );

  return (
    <Page title="Research">
      <Row>{renderProjectsDataList(data)}</Row>
    </Page>
  );
};

export default Research;
