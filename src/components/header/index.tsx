import * as React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

import { Row, Column, ContainerFluid } from '../grid';
import './index.scss';

interface HeaderProps {
  siteTitle?: string;
}

export const Header = ({ siteTitle = '' }: HeaderProps) => (
  <header>
    <ContainerFluid>
      <Row className="pz-HeaderRow">
        <Column className="pz-HeaderRow__logo" spanXl={2}>
          <Link to="/">{siteTitle}</Link>
        </Column>
        <Column className="pz-HeaderRow__nav" spanXl={8}>
          {/* TODO: GP - make component */}
          <div className="pz-HeaderRow__nav-item">
            <Link to="/planning">planning</Link>
          </div>
          <div className="pz-HeaderRow__nav-item">
            <Link to="/interiors">interiors</Link>
          </div>
          <div className="pz-HeaderRow__nav-item">
            <Link to="/competitions">competitions</Link>
          </div>
          <div className="pz-HeaderRow__nav-item">
            <Link to="/">#puzzle</Link>
          </div>
        </Column>
        <Column className="pz-HeaderRow__about" spanXl={2}>
          <Link to="/about">about</Link>
          <a href="https://www.instagram.com/puzzle.architecture/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="sm"></FontAwesomeIcon>
          </a>
          <a href="https://www.facebook.com/puzzle.architecture/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} size="sm"></FontAwesomeIcon>
          </a>
        </Column>
      </Row>
    </ContainerFluid>
  </header>
);
