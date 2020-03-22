import * as React from 'react';
import { Link } from 'gatsby';

interface HeaderProps {
  siteTitle?: string;
}

export const Header = ({ siteTitle = '' }: HeaderProps) => (
  <header>
    <div>
      <h1>
        <Link to="/">{siteTitle}</Link> <Link to="/about/">about</Link>
      </h1>
    </div>
  </header>
);
