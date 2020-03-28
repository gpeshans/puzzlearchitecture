import * as React from 'react';
// import { Link } from 'gatsby';
import { Container, ContainerFluid, Row, Column } from '../components/grid';

import { Layout } from '../components/layout';
import { SEO } from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Row>
        <Column span={12} spanMd={3}>
          .column
        </Column>
        <Column span={12} spanMd={3}>
          .column
        </Column>
        <Column span={12} spanMd={3}>
          .column
        </Column>
        <Column span={12} spanMd={3}>
          .column
        </Column>
      </Row>
    </Container>
    {/* <ContainerFluid>
      <Row>
        <Column span={12} spanMd={3}>
          .column
        </Column>
        <Column span={12} spanMd={3}>
          .column
        </Column>
        <Column span={12} spanMd={3}>
          .column
        </Column>
        <Column span={12} spanMd={3}>
          .column
        </Column>
      </Row>
    </ContainerFluid> */}
  </Layout>
);

export default IndexPage;
