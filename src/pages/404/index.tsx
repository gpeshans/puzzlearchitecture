import * as React from 'react';

import { Page } from '../../components/page';

const NotFoundPage = () => (
  <Page seoProps={{ title: '404 - Not found', path: '/404' }}>
    <h1>NOT FOUND</h1>
    <p>{`You just hit a route that doesn't exist... the sadness.`}</p>
  </Page>
);

export default NotFoundPage;
