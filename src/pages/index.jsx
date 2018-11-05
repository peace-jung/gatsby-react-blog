import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../layout/layout';

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: "Peace's blog" },
            { name: 'keywords', content: 'react, gatsby, blog' },
          ]}
        >
          <html lang="ko" />
        </Helmet>

        <Layout title={data.site.siteMetadata.title} />
      </>
    )}
  />
);

export default IndexPage;
