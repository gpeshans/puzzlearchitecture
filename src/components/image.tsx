import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img, { FixedObject } from 'gatsby-image';

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
          fixed: FixedObject;
        };
      };
    }[];
  };
}

interface ImgProps {
  filename: string;
}

export const Image = ({ filename }: ImgProps) => {
  const data = useStaticQuery<ImgData>(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fixed(width: 350, height: 300) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `);

  const image = data.images.edges.find(n => {
    return n.node.relativePath.includes(filename);
  });

  if (!image) {
    return null;
  }

  return <Img fixed={image.node.childImageSharp.fixed} durationFadeIn={500} fadeIn={true} />;
};
