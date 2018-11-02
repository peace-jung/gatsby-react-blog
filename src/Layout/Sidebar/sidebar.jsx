import React from 'react';
import Link from 'gatsby-link';
import { StaticQuery, graphql } from 'gatsby';

import Menu from './menu';
import './sidebar.scss';

const Sidebar = () => (
  <StaticQuery
    query={graphql`
      query MenuListQuery {
        site {
          siteMetadata {
            title
            author
            comment
            menu {
              label
              path
              child {
                label
                path
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className="sidebar">
        <Link to="/" className="sidebar-title">
          <h1 className="sidebar-title">{data.site.siteMetadata.title}</h1>
        </Link>

        <div>{data.site.siteMetadata.author}</div>
        <div>{data.site.siteMetadata.comment}</div>

        <Menu data={data.site.siteMetadata.menu} />
      </div>
    )}
  />
);

export default Sidebar;
