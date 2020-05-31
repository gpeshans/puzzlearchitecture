import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

import { ContainerFluid, Column, Row } from '../grid';
import './index.scss';

interface FooterProps {
  siteTitle?: string;
}

export const Footer = ({ siteTitle = '' }: FooterProps) => (
  <footer>
    <ContainerFluid>
      <Row className="pz-FooterRow">
        <Column className="pz-FooterRow__info" spanMd={6} spanLg={6} spanXl={6}>
          <span>
            © {new Date().getFullYear()} {siteTitle}
          </span>
          <div>North Macedonia</div>
        </Column>
        <Column className="pz-FooterRow__social-media" spanMd={6} spanLg={6} spanXl={6}>
          <span>Follow us</span>
          <div>
            <a
              href="https://www.instagram.com/_puzzle_arch/"
              target="_blank"
              rel="noopener noreferrer"
              className="pz-FooterRow__social-media-link"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.facebook.com/puzzle.architecture/"
              target="_blank"
              rel="noopener noreferrer"
              className="pz-FooterRow__social-media-link"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>
        </Column>
      </Row>
    </ContainerFluid>
  </footer>
);
