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
        <Column spanXl={2}>
          <Link to="/about">info/about</Link>
        </Column>
      </Row>
    </ContainerFluid>
  </header>
);
