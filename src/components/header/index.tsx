import * as React from 'react';
import { Link } from 'gatsby';

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
            <Link to="/">planning</Link>
          </div>
          <div className="pz-HeaderRow__nav-item">
            <Link to="/">interiors</Link>
          </div>
          <div className="pz-HeaderRow__nav-item">
            <Link to="/">competitions</Link>
          </div>
          <div className="pz-HeaderRow__nav-item">
            <Link to="/">#puzzle</Link>
          </div>
        </Column>
        <Column className="pz-HeaderRow__about" spanXl={2}>
          <Link to="/about">info/about</Link>
        </Column>
      </Row>
    </ContainerFluid>
  </header>
);
