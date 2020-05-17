import * as React from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import Logo from '../../images/svg/logo.svg';
import { NavigationItem } from './item';
import './index.scss';

export const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const renderToggleIcon = () => {
    const toggleMenuIcon = isMenuActive ? faTimes : faBars;
    return <FontAwesomeIcon icon={toggleMenuIcon} size="2x" onClick={() => toggleMenu()} />;
  };

  const contentClasses = classNames('pz-Navigation__content', isMenuActive && 'pz-Navigation__content--active');

  return (
    <div className="pz-Navigation">
      <Link to="/" className="pz-Navigation__logo">
        <Logo />
      </Link>
      <div className={contentClasses}>
        <div className="pz-Navigation__items">
          <NavigationItem to="/planning" text="planning" />
          <NavigationItem to="/interiors" text="interiors" />
          <NavigationItem to="/competitions" text="competitions" />
          {/* TODO: GP - uncomment when a solution for the instagram page is developed
          <NavbarItem to="/instagram" text="#puzzle" isActive={isMenuActive} />
          */}
          <NavigationItem to="/contact" text="contact" />
        </div>
      </div>
      <div className="pz-Navigation__toggle">{renderToggleIcon()}</div>
    </div>
  );
};
