import React from 'react';
import { Link } from 'gatsby';

import './content.scss';

const Content = ({ children }) => {
  return (
    <div className="content">
      {children ? (
        children
      ) : (
        <>
          <div style={{ marginBottom: 30 }}>
            <h2>한글 테스트</h2>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }} />
            <Link to="/page-2/">Go to page 2</Link>
          </div>

          <div style={{ marginBottom: 30 }}>
            <h2>Hi people</h2>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }} />
            <Link to="/page-3/">Go to page 3</Link>
          </div>

          <div style={{ marginBottom: 30 }}>
            <h2>Hi people</h2>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }} />
            <Link to="/page-2/">Go to page 2</Link>
          </div>

          <div style={{ marginBottom: 30 }}>
            <h2>Hi people</h2>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }} />
            <Link to="/page-2/">Go to page 2</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Content;
