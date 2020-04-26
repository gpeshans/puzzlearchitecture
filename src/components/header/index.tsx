import * as React from 'react';

import { Navbar } from '../navbar';
import './index.scss';

interface HeaderProps {
  siteTitle?: string;
}

export const Header = ({ siteTitle = '' }: HeaderProps) => (
  <header>
    <Navbar siteTitle={siteTitle} />
  </header>
);
