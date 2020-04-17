import * as React from 'react';

import { Image } from '../image';
import './index.scss';
import { Link } from 'gatsby';

interface ProjectItemProps {
  name: string;
  location: string;
  year: Date;
  imageFilename?: string;
}

export const ProjectItem = ({ name, location, year, imageFilename = '' }: ProjectItemProps) => (
  <div className="pz-ProjectItem">
    <Link to="/">
      <div className="pz-ProjectItem__image">
        <Image filename={imageFilename} />
        <div className="pz-ProjectItem__image-overlay">
          <div className="pz-ProjectItem__image-overlay-text">+</div>
        </div>
      </div>
      <div className="pz-ProjectItem__info">
        {name.toUpperCase()} / {location.toUpperCase()} / {year.getFullYear()}
      </div>
    </Link>
  </div>
);
