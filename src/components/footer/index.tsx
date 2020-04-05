import * as React from 'react';

import { ContainerFluid, Column, Row } from '../grid';
import './index.scss';

interface FooterProps {
  siteTitle?: string;
}

export const Footer = ({ siteTitle = '' }: FooterProps) => (
  <footer>
    <ContainerFluid>
      <Row className="pz-FooterRow">
        <Column className="pz-FooterRow__info">
          © {new Date().getFullYear()} {siteTitle}
        </Column>
      </Row>
    </ContainerFluid>
  </footer>
);
