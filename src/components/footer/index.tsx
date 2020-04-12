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
        <Column className="pz-FooterRow__info" spanXl={1}>
          <div>
            © {new Date().getFullYear()} {siteTitle}
          </div>
          <div>Skopje, North Macedonia</div>
        </Column>
        <Column className="pz-FooterRow__social-media" spanXl={1}>
          <div>
            <a href="https://www.instagram.com/puzzle.architecture/" target="_blank" rel="noopener noreferrer">
              instagram
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com/puzzle.architecture/" target="_blank" rel="noopener noreferrer">
              facebook
            </a>
          </div>
        </Column>
      </Row>
    </ContainerFluid>
  </footer>
);
