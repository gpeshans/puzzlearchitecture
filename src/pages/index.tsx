import * as React from 'react';
import { Link } from 'gatsby';

import { Layout } from '../components/layout';
import { SEO } from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi from the home page</h1>
    <p>Welcome to the home page</p>
    <Link to="/content/1/">Go to content item 1</Link>
    <br />
  </Layout>
);

export default IndexPage;
