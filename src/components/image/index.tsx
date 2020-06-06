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
  desktopImages: {
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
  mobileImages: {
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
      desktopImages: allFile {
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
      mobileImages: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 800, maxHeight: 800) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `);

  const desktopImage = data.desktopImages.edges.find((n) => {
    return n.node.relativePath.includes(filename);
  });

  const mobileImage = data.mobileImages.edges.find((n) => {
    return n.node.relativePath.includes(filename);
  });

  if (!desktopImage && !mobileImage) {
    return null;
  }

  const classes = classNames('pz-Img', className);

  const imageSources: FluidObject[] = [];

  mobileImage && imageSources.push(mobileImage.node.childImageSharp.fluid);
  desktopImage &&
    imageSources.push({
      ...desktopImage.node.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    });

  return (
    <Img
      alt={filename}
      className={classes}
      fluid={imageSources}
      durationFadeIn={500}
      imgStyle={{ objectFit: 'contain', objectPosition: 'center top' }}
      fadeIn={true}
    />
  );
};
