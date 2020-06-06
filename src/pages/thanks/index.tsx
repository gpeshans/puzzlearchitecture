import * as React from 'react';

import { Page } from '../../components/page';

const NotFoundPage = () => (
  <Page seoProps={{ title: 'Thank you!', path: '/thanks' }}>
    <h1>Thank you!</h1>
    <p>{`Your message has been successfully sent. We will contact you very soon!`}</p>
  </Page>
);

export default NotFoundPage;
