import * as React from 'react';

import { ContainerFluid, Row, Column } from '../components/grid';
import { SEO } from '../components/seo';
import { Layout } from '../components/layout';
import { ProjectItem } from '../components/project-item';
import './index.scss';

const renderSamples = () => {
  const rows: JSX.Element[] = [];
  let cols: JSX.Element[] = [];
  for (let i = 0; i < 12; i++) {
    const col = (
      <Column key={i} spanXl={3}>
        <ProjectItem
          name={`Villa Berovo ${i + 1}`}
          location={`Berovo lake ${i + 1}`}
          year={new Date()}
          imageFilename={`sample${i + 1}.jpg`}
        />
      </Column>
    );
    cols.push(col);
    if ((i + 1) % 4 === 0) {
      const row = <Row key={(i + 1) / 3}>{cols.map(c => c)} </Row>;
      rows.push(row);
      cols = [];
    }
  }
  return rows;
};

const IndexPage = () => (
  <Layout>
    <SEO title="Puzzle" />
    <ContainerFluid>{renderSamples()}</ContainerFluid>
  </Layout>
);

export default IndexPage;
