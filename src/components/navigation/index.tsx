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

  return (
    <div className="pz-Navigation">
      <div className="pz-Navigation__logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className={classNames('pz-Navigation__content', isMenuActive && 'pz-Navigation__content--active')}>
        <div className="pz-Navigation__items">
          <NavigationItem to="/architecture" text="architecture" />
          <NavigationItem to="/interior-design" text="interior design" />
          <NavigationItem to="/competitions" text="competitions" />
          <NavigationItem to="/research" text="research" />
          {/* TODO: GP - uncomment when a solution for the instagram page is developed
          <NavbarItem to="/instagram" text="#puzzle" isActive={isMenuActive} />
          */}
          <NavigationItem to="/contact" text="info / contact" />
        </div>
      </div>
      <div className="pz-Navigation__toggle">{renderToggleIcon()}</div>
    </div>
  );
};
