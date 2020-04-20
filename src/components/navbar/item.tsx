import * as React from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';

interface NavbarItemProps {
  text: string;
  to: string;
  isActive: boolean;
}

export const NavbarItem = ({ text, to, isActive }: NavbarItemProps) => {
  const itemClasses = classNames('pz-Navbar__item', isActive && 'pz-Navbar__item--active');
  return (
    <li className={itemClasses}>
      <Link to={to}>{text}</Link>
    </li>
  );
};
