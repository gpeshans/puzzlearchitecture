import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Page } from '../components/page';
import { Row } from '../components/grid';
import { ProjectsListQuery, renderProjectsDataList, Category } from '../data';
import { Breadcrumbs } from '../components/breadcrumbs';

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
              }
            }
          }
        }
      }
    `,
  );

  return (
    <Page seoProps={{ title: 'Research', path: '/research' }}>
      <Breadcrumbs category={Category.Research} />
      <Row>{renderProjectsDataList(data)}</Row>
    </Page>
  );
};

export default Research;
