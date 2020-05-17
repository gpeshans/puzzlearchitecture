import * as React from 'react';
import { Link } from 'gatsby';

import { Category } from '../../data';
import './index.scss';

interface BreadcrumbProps {
  category: Category;
  linkCategory?: boolean;
}

export const Breadcrumbs = ({ category, linkCategory = false }: BreadcrumbProps) => {
  const HomeLink = () => <Link to="/">Home</Link>;
  const CategoryLink = () => (linkCategory ? <Link to={category}>{category}</Link> : <>{category}</>);
  return (
    <div className="pzBreadcrumbs">
      <HomeLink />
      <> / </>
      <CategoryLink />
    </div>
  );
};
