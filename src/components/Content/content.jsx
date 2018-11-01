import React from 'react';
import { Link } from 'gatsby';

import './content.scss';

const Content = () => {
  return (
    <div className="content">
      <div style={{ marginBottom: 30 }}>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }} />
        <Link to="/page-2/">Go to page 2</Link>
      </div>

      <div style={{ marginBottom: 30 }}>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }} />
        <Link to="/page-2/">Go to page 2</Link>
      </div>

      <div style={{ marginBottom: 30 }}>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }} />
        <Link to="/page-2/">Go to page 2</Link>
      </div>

      <div style={{ marginBottom: 30 }}>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }} />
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </div>
  );
};

export default Content;
