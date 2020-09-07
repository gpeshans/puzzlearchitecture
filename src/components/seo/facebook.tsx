import * as React from 'react';
import { Helmet } from 'react-helmet';

interface Props {
  url: string;
  title: string;
  desc: string;
  image: string;
  locale: string;
  type: string;
}

/**
 * Facebook metadata.
 */
const Facebook = ({ url, title, desc, image, locale, type = 'website' }: Props) => (
  <Helmet>
    <meta property="og:locale" content={locale} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content={type} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={desc} />
    <meta property="og:image" content={image} />
    <meta property="og:image:alt" content={desc} />
    <meta property="og:image:height" content="376" />
    <meta property="og:image:width" content="376" />
  </Helmet>
);

export default Facebook;
