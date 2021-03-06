import React, { PropTypes } from 'react';

const styles = require('./style.scss');

const Icon = ({ type, children, ...props }) => (
  <span {...props}>
    <i className={`${styles['ss-icon']} ${styles[`ss-${type}`]}`} />
    {children}
  </span>
);

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.element
};

Icon.defaultProps = {
  children: null
};

export default Icon;
