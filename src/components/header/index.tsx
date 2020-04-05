import * as React from 'react';
import { Row, Column, ContainerFluid } from '../grid';

interface HeaderProps {
  siteTitle?: string;
}

export const Header = ({ siteTitle = '' }: HeaderProps) => (
  <header>
    <ContainerFluid>
      <Row>
        <Column spanXl={3}>
          <div className="logo">{siteTitle}</div>
        </Column>
        <Column spanXl={3} offsetXl={6}>
          <div className="burger">info/about</div>
        </Column>
      </Row>
    </ContainerFluid>
  </header>
);
