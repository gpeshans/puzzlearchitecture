import * as React from 'react';
import { Link } from 'gatsby';

import { Container, ContainerFluid, Row, Column } from '../components/grid';
import { Layout } from '../components/layout';
import { SEO } from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ContainerFluid>
      <Row>
        <Column>
          <h1>Hi from the home page</h1>
        </Column>
      </Row>
      <Row>
        <Column>
          <h2>Welcome to the home page</h2>
        </Column>
      </Row>
      <Row>
        <Column>
          <Link to="/content/1/">Go to content item 1</Link>
        </Column>
      </Row>
    </ContainerFluid>
    <Container>
      <Row>
        <Column span={12} spanMd={3} spanLg={2} offsetLg={1} spanXl={1} offsetXl={2} hiddenXlDown>
          .column
        </Column>
        <Column span={12} spanMd={3} spanLg={2} offsetLg={1} spanXl={1} offsetXl={2} hiddenSmDown>
          .column
        </Column>
        <Column span={12} spanMd={3} spanLg={2} offsetLg={1} spanXl={1} offsetXl={2} hiddenMdUp>
          .column
        </Column>
        <Column span={12} spanMd={3} spanLg={2} offsetLg={1} spanXl={1} offsetXl={2} hiddenXlUp>
          .column
        </Column>
      </Row>
    </Container>
    <ContainerFluid>
      <Row>
        <Column span={12} spanMd={3} spanLg={2} offsetLg={1} spanXl={1} offsetXl={2} hiddenXlDown>
          .column
        </Column>
        <Column span={12} spanMd={3} spanLg={2} offsetLg={1} spanXl={1} offsetXl={2} hiddenSmDown>
          .column
        </Column>
        <Column span={12} spanMd={3} spanLg={2} offsetLg={1} spanXl={1} offsetXl={2} hiddenMdUp>
          .column
        </Column>
        <Column span={12} spanMd={3} spanLg={2} offsetLg={1} spanXl={1} offsetXl={2} hiddenXlUp>
          .column
        </Column>
      </Row>
    </ContainerFluid>
  </Layout>
);

export default IndexPage;
