import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Header } from '../header';
import { Footer } from '../footer';
import './index.scss';

interface LayoutProps {
  children: React.ReactNode;
}

interface SiteDataProps {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

export const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery<SiteDataProps>(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer siteTitle={data.site.siteMetadata.title} />
    </>
  );
};
