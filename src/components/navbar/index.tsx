import * as React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import { ContainerFluid, Column, Row } from '../grid';
import { NavbarItem } from './item';
import './index.scss';

interface NavbarProps {
  siteTitle?: string;
}

export const Navbar = ({ siteTitle = '' }: NavbarProps) => {
  const [isMenuActive, setIsMenuActive] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const renderToggleIcon = () => {
    const toggleMenuIcon = isMenuActive ? faTimes : faBars;
    return <FontAwesomeIcon icon={toggleMenuIcon} size="2x" onClick={() => toggleMenu()}></FontAwesomeIcon>;
  };

  return (
    <ContainerFluid>
      <Row>
        <Column>
          <nav className="pz-NavbarContainer">
            <ul className="pz-Navbar">
              <li className="pz-Navbar__logo">
                <Link to="/">{siteTitle}</Link>
              </li>
              <NavbarItem to="/planning" text="planning" isActive={isMenuActive} />
              <NavbarItem to="/interiors" text="interiors" isActive={isMenuActive} />
              <NavbarItem to="/competitions" text="competitions" isActive={isMenuActive} />
              <NavbarItem to="/" text="#puzzle" isActive={isMenuActive} />
              <NavbarItem to="/about" text="about/contact" isActive={isMenuActive} />
              <li className="pz-Navbar__toggle">{renderToggleIcon()}</li>
            </ul>
          </nav>
        </Column>
      </Row>
    </ContainerFluid>
  );
};
