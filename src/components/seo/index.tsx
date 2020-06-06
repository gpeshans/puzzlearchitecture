/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

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
}

export const SEO = ({ title = '', description = '', lang = 'en', path = '', imageSrc }: SEOProps) => {
  const { site } = useStaticQuery<SiteDataProps>(
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
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaUrl = `${site.siteMetadata.siteUrl}${path}`;
  const metaImage = imageSrc ? `${site.siteMetadata.siteUrl}${imageSrc}` : null;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      defer={false}
    >
      <link rel="canonical" href={metaUrl} />
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={site.siteMetadata.keywords.join(',')} />
      {metaImage && <meta name="image" content={metaImage} />}

      {/* Social networks specific meta */}
      <meta property="og:site-name" content={title} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      {metaImage && <meta property="og:image" content={metaImage} />}
      {metaImage && <meta property="og:image:alt" content={title} />}

      {/* Twitter specific meta */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:card" content="summary_large_image" />
      {metaImage && <meta name="twitter:image" content={metaImage} />}
      {metaImage && <meta name="twitter:image:alt" content={title} />}

      {/* Google specific meta */}
      <meta name="google-site-verification" content="rmXO1I7920qgzaWYJyygAK01TjTMOkRRykuhf5HPVCo" />
    </Helmet>
  );
};
