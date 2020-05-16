import * as React from 'react';
import { Link } from 'gatsby';

interface NavigationItemProps {
  text: string;
  to: string;
}

export const NavigationItem = ({ text, to }: NavigationItemProps) => {
  return (
    <Link className="pz-Navigation__item" to={to}>
      {text}
    </Link>
  );
};
