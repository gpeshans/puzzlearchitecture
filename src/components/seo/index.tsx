/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import Facebook from './facebook';
import Twitter from './twitter';
import Google from './google';

export interface SEOProps {
  title?: string;
  description?: string;
  lang?: string;
  path?: string;
  imageSrc?: string;
}

interface SiteDataProps {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: string;
      lang: string;
      keywords: string[];
      siteUrl: string;
    };
  };
  logo: {
    childImageSharp: {
      fluid: {
        originalImg: string;
      };
    };
  };
}

export const SEO = ({ title = '', description = '', lang = 'en', path = '', imageSrc }: SEOProps) => {
  const { site, logo } = useStaticQuery<SiteDataProps>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            lang
            keywords
            siteUrl
          }
        }
        logo: file(relativePath: { eq: "logo/puzzle-icon.png" }) {
          childImageSharp {
            fluid {
              originalImg
            }
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaUrl = `${site.siteMetadata.siteUrl}${path}`;
  const logoImage = `${site.siteMetadata.siteUrl}${logo.childImageSharp.fluid.originalImg}`;
  const metaImage = imageSrc ? `${site.siteMetadata.siteUrl}${imageSrc}` : logoImage;
  const isArticle = !!imageSrc;

  return (
    <>
      <Helmet title={title} titleTemplate={`%s | ${site.siteMetadata.title}`}>
        <html lang={lang} />
        <meta name="description" content={metaDescription} />
        <meta name="image" content={metaImage} />
      </Helmet>
      <Facebook
        desc={metaDescription}
        image={metaImage}
        title={title}
        type={isArticle ? 'article' : 'website'}
        url={metaUrl}
        locale={lang}
      />
      <Twitter title={title} image={metaImage} desc={metaDescription} />
      <Google />
    </>
  );
};
