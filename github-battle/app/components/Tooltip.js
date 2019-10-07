import React from 'react';
import PropTypes from 'prop-types';
import withHover from './withHover';

const Tooltip = ({ text, children, hovering }) => (
  <div className="hover-container">
    {hovering === true && <div className="hover-tooltip">{text}</div>}
    {children}
  </div>
);

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  hovering: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default withHover(Tooltip);
