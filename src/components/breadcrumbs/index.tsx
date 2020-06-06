import * as React from 'react';
import { Link } from 'gatsby';

import './index.scss';
import { Category } from '../../data';

interface BreadcrumbsProps {
  category?: Category;
}

export const Breadcrumbs = ({ category }: BreadcrumbsProps) => {
  const HomeLink = () => <Link to="/">Home</Link>;
  return (
    <div className="pzBreadcrumbs">
      <HomeLink />
      {category && ` / ${category}`}
    </div>
  );
};
