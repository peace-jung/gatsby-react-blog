import React from 'react';

import './sidebar.scss';

const Sidebar = ({ siteTitle }) => {
  return (
    <div className="sidebar">
      <h1>{siteTitle}</h1>
    </div>
  );
};

export default Sidebar;
