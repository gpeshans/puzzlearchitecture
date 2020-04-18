import * as React from 'react';

import { ContainerFluid } from '../grid';
import { SEO } from '../seo';
import { Layout } from '../layout';

interface PageProps {
  children: React.ReactNode;
  title: string;
}

export const Page = ({ children, title }: PageProps) => (
  <Layout>
    <SEO title={title} />
    <ContainerFluid>{children}</ContainerFluid>
  </Layout>
);
