import * as React from 'react';
import { Link } from 'gatsby';
import { kebabCase } from 'lodash';

import { Image } from '../image';
import './index.scss';

interface ProjectTileProps {
  name: string;
  location: string;
  year: number;
  titleImage: string;
}

export const ProjectTile = ({ name, location, year, titleImage }: ProjectTileProps) => (
  <div className="pz-ProjectTile">
    <Link to={kebabCase(name)}>
      <div className="pz-ProjectTile__image">
        <Image filename={titleImage} />
        <div className="pz-ProjectTile__image-overlay">
          <div className="pz-ProjectTile__image-overlay-text">+</div>
        </div>
      </div>
      <div className="pz-ProjectTile__info">
        {name} / {location} / {year}
      </div>
    </Link>
  </div>
);
