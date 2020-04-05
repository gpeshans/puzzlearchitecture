import * as React from 'react';

import { ContainerFluid, Row, Column } from '../components/grid';
import { Layout } from '../components/layout';
import { Image } from '../components/image';
import './index.scss';

const IndexPage = () => (
  <Layout>
    <ContainerFluid>
      <Row>
        <Column className="imagePlaceholder" spanXl={3}>
          <Image filename="sample1.jpg" />
        </Column>
        <Column className="imagePlaceholder" spanXl={3}>
          <Image filename="sample2.jpg" />
        </Column>
        <Column className="imagePlaceholder" spanXl={3}>
          <Image filename="sample3.jpg" />
        </Column>
        <Column className="imagePlaceholder" spanXl={3}>
          <Image filename="sample4.jpg" />
        </Column>
      </Row>
      <Row>
        <Column className="imagePlaceholder" spanXl={3}>
          <Image filename="sample5.jpg" />
        </Column>
        <Column className="imagePlaceholder" spanXl={3}>
          <Image filename="sample6.jpg" />
        </Column>
        <Column className="imagePlaceholder" spanXl={3}>
          <Image filename="sample7.jpg" />
        </Column>
        <Column className="imagePlaceholder" spanXl={3}>
          <Image filename="sample8.jpg" />
        </Column>
      </Row>
      <Row>
        <Column className="imagePlaceholder" spanXl={3}>
          <Image filename="sample9.jpg" />
        </Column>
        <Column className="imagePlaceholder" spanXl={3}>
          <Image filename="sample10.jpg" />
        </Column>
        <Column className="imagePlaceholder" spanXl={3}>
          <Image filename="sample11.jpg" />
        </Column>
        <Column className="imagePlaceholder" spanXl={3}>
          <Image filename="sample12.jpg" />
        </Column>
      </Row>
    </ContainerFluid>
  </Layout>
);

export default IndexPage;
