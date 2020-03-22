import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Header } from './header';
import { Footer } from './footer';
import './layout.scss';

interface LayoutProps {
  children: JSX.Element[];
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
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};
