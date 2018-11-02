import React from 'react';
import { Link } from 'gatsby';

import Layout from '../Layout/layout';

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/development/nodejs/d20181101">Go d20181101</Link>
  </Layout>
);

export default SecondPage;
