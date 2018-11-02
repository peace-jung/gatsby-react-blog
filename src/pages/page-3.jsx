import React from 'react';
import { Link } from 'gatsby';

import Layout from '../Layout/layout';
// import Content from '../components/Content/content';

const SecondPage = () => (
  <Layout>
    <h1>asdfsafasdfasdfnd page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
