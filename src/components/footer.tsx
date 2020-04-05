import * as React from 'react';

import { ContainerFluid, Column, Row } from './grid';

interface FooterProps {
  siteTitle?: string;
}

export const Footer = ({ siteTitle = '' }: FooterProps) => (
  <footer>
    <ContainerFluid>
      <Row>
        <Column className="footerInfo" spanXl={4} offsetXl={4}>
          © {new Date().getFullYear()} <a href="https://www.instagram.com/puzzle.architecture/">{siteTitle}</a>
        </Column>
      </Row>
    </ContainerFluid>
  </footer>
);
