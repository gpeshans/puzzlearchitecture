import * as React from 'react';
import classNames from 'classnames';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { ImgData } from '../../data';
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

interface ImgProps {
  filename: string;
  className?: string;
}

export const Image = ({ filename, className = '' }: ImgProps) => {
  const data = useStaticQuery<ImgData>(graphql`
    query {
      images: allFile(filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" } }) {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 1800) {
                ...GatsbyImageSharpFluid
                presentationWidth
              }
            }
          }
        }
      }
    }
  `);

  const desktopImage = data.images.edges.find((n) => {
    return n.node.relativePath.includes(filename);
  });

  if (!desktopImage) {
    return null;
  }

  const classes = classNames('pz-Img', className);

  return (
    <Img
      alt={filename}
      className={classes}
      fluid={desktopImage.node.childImageSharp.fluid}
      imgStyle={{ objectFit: 'contain', objectPosition: 'center top' }}
      fadeIn={true}
    />
  );
};
