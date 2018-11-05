import React from 'react';
import Link from 'gatsby-link';

const Menu = ({ data }) => (
  <ul style={{ marginTop: 30, marginLeft: 0, listStyle: 'none' }}>
    {data.map(item => {
      return (
        <li key={item.path}>
          {item.child ? (
            <>
              {item.label}
              <ul style={{ marginLeft: 20, marginTop: 10, listStyle: 'none' }}>
                {item.child.map(citem => {
                  return (
                    <li key={citem.path}>
                      <Link to={citem.path}>{citem.label}</Link>
                    </li>
                  );
                })}
              </ul>
            </>
          ) : (
            <Link to={item.path}>{item.label}</Link>
          )}
        </li>
      );
    })}
  </ul>
);

export default Menu;
