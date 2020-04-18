import * as React from 'react';

import { Page } from '../../components/page';

const NotFoundPage = () => (
  <Page title="404 - Not found">
    <h1>NOT FOUND</h1>
    <p>{`You just hit a route that doesn't exist... the sadness.`}</p>
  </Page>
);

export default NotFoundPage;
