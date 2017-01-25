import React from 'react';

const Layout = props => (
  <div>
    <h2>Layout</h2>
    {props.children}
  </div>
);

Layout.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default Layout;