import * as React from 'react';

import { ContainerFluid } from '../grid';
import { SEO } from '../seo';
import { Layout } from '../layout';

interface PageProps {
  children: React.ReactNode;
  title: string;
  className?: string;
}

export const Page = ({ children, title, className = '' }: PageProps) => (
  <Layout>
    <SEO title={title} />
    <ContainerFluid className={className}>{children}</ContainerFluid>
  </Layout>
);
