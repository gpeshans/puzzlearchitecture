import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Page } from '../components/page';
import { Row } from '../components/grid';
import { ProjectsListQuery, renderProjectsDataList, Category } from '../data';
import { Breadcrumbs } from '../components/breadcrumbs';

const Architecture = () => {
  const data = useStaticQuery<ProjectsListQuery>(
    graphql`
      query {
        allSitePage(
          filter: { context: { name: { ne: null }, category: { in: ["architecture"] } } }
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
              }
            }
          }
        }
      }
    `,
  );

  return (
    <Page seoProps={{ title: 'Architecture', path: '/architecture' }}>
      <Breadcrumbs category={Category.Architecture} />
      <Row>{renderProjectsDataList(data)}</Row>
    </Page>
  );
};

export default Architecture;
