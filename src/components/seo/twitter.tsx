import * as React from 'react';
import { Helmet } from 'react-helmet';

interface Props {
  title: string;
  desc: string;
  image: string;
}

/**
 * Twitter metadata.
 */
const Twitter = ({ title, desc, image }: Props) => (
  <Helmet>
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={desc} />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:image:alt" content={desc} />
  </Helmet>
);

export default Twitter;
