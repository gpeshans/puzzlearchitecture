import * as React from 'react';

import { ContainerFluid, Row, Column } from '../components/grid';
import { SEO } from '../components/seo';
import { Layout } from '../components/layout';
import { Image } from '../components/image';
import './index.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Puzzle" />
    <ContainerFluid>
      <Row>
        <Column spanXl={3}>
          <Image filename="sample1.jpg" />
        </Column>
        <Column spanXl={3}>
          <Image filename="sample2.jpg" />
        </Column>
        <Column spanXl={3}>
          <Image filename="sample3.jpg" />
        </Column>
        <Column spanXl={3}>
          <Image filename="sample4.jpg" />
        </Column>
      </Row>
      <Row>
        <Column spanXl={3}>
          <Image filename="sample5.jpg" />
        </Column>
        <Column spanXl={3}>
          <Image filename="sample6.jpg" />
        </Column>
        <Column spanXl={3}>
          <Image filename="sample7.jpg" />
        </Column>
        <Column spanXl={3}>
          <Image filename="sample8.jpg" />
        </Column>
      </Row>
      <Row>
        <Column spanXl={3}>
          <Image filename="sample9.jpg" />
        </Column>
        <Column spanXl={3}>
          <Image filename="sample10.jpg" />
        </Column>
        <Column spanXl={3}>
          <Image filename="sample11.jpg" />
        </Column>
        <Column spanXl={3}>
          <Image filename="sample12.jpg" />
        </Column>
      </Row>
    </ContainerFluid>
  </Layout>
);

export default IndexPage;
