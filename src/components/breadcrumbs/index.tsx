import * as React from 'react';
import { Link } from 'gatsby';

import './index.scss';

export const Breadcrumbs = () => {
  const HomeLink = () => <Link to="/">Home</Link>;
  return (
    <div className="pzBreadcrumbs">
      <HomeLink />
    </div>
  );
};
