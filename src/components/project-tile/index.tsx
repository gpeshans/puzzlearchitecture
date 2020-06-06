import * as React from 'react';
import { Link } from 'gatsby';
import { kebabCase } from 'lodash';
import { useStaticQuery, graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

import './index.scss';

interface ProjectTileProps {
  name: string;
  location?: string;
  year: number;
  titleImage: string;
}

interface ProjectTileImgData {
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

export const ProjectTile = ({ name, location, year, titleImage }: ProjectTileProps) => {
  const imageData = useStaticQuery<ProjectTileImgData>(graphql`
    query {
      images: allFile(filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" } }) {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 800, maxHeight: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const image = imageData.images.edges.find((n) => {
    return n.node.relativePath.includes(titleImage);
  });

  if (!image) {
    return null;
  }

  return (
    <div className="pz-ProjectTile">
      <Link to={`/${kebabCase(name)}`}>
        <div className="pz-ProjectTile__image">
          <Img
            alt={titleImage}
            fluid={image.node.childImageSharp.fluid}
            durationFadeIn={500}
            imgStyle={{ objectFit: 'contain' }}
            fadeIn={true}
          />
          <div className="pz-ProjectTile__image-overlay">
            <div className="pz-ProjectTile__image-overlay-text">+</div>
          </div>
        </div>
        <div className="pz-ProjectTile__info">
          {name} | {location && `${location} |`} {year}
        </div>
      </Link>
    </div>
  );
};
