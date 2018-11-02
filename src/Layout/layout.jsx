import React from 'react';

import Sidebar from './Sidebar/sidebar';
import Content from '../components/Content/content';
import './layout.scss';

const Layout = ({ children }) => (
  <div
    style={{
      position: 'relative',
      margin: '0 auto',
      maxWidth: 1280,
    }}
  >
    <Sidebar />
    <Content children={children} />

    <span style={{ clear: 'both', display: 'block' }} />
  </div>
);

export default Layout;
