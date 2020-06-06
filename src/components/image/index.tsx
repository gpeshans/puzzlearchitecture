import * as React from 'react';
import classNames from 'classnames';
import { useStaticQuery, graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

import './index.scss';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

interface ImgData {
  images: {
    edges: {
      node: {
        relativePath: string;
        name: string;
        childImageSharp: {
          fluid: FluidObject;
        };
      };
    }[];
  };
}

interface ImgProps {
  filename: string;
  className?: string;
}

export const Image = ({ filename, className = '' }: ImgProps) => {
  const data = useStaticQuery<ImgData>(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `);

  const image = data.images.edges.find((n) => {
    return n.node.relativePath.includes(filename);
  });

  if (!image) {
    return null;
  }

  const classes = classNames('pz-Img', className);

  return (
    <Img
      alt={filename}
      className={classes}
      fluid={image.node.childImageSharp.fluid}
      durationFadeIn={500}
      imgStyle={{ objectFit: 'contain', objectPosition: 'center top' }}
      fadeIn={true}
    />
  );
};
