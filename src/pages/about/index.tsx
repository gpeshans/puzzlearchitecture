import * as React from 'react';
import { Link } from 'gatsby';

import { Page } from '../../components/page';

const About = () => (
  <Page title="About">
    <h1>Hi from the about page</h1>
    <p>Welcome to the about page</p>
    <Link to="/">Go back to the homepage</Link>
  </Page>
);

export default About;
