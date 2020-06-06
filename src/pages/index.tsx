import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Page } from '../components/page';
import { Row } from '../components/grid';
import { renderProjectsDataList, ProjectsListQuery } from '../data';

const IndexPage = () => {
  const data = useStaticQuery<ProjectsListQuery>(graphql`
    query {
      allSitePage(filter: { context: { name: { ne: null } } }, sort: { fields: context___id, order: DESC }) {
        edges {
          node {
            context {
              id
              name
              category
              location
              year
              status
              surface
              titleImage
              images
            }
          }
        }
      }
    }
  `);

  return (
    <Page seoProps={{ title: 'Puzzle architecture' }}>
      <Row>{renderProjectsDataList(data)}</Row>
    </Page>
  );
};

export default IndexPage;
