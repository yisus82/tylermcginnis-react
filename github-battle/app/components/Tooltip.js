import React from 'react';
import PropTypes from 'prop-types';
import Hover from './Hover';

const Tooltip = ({ text, children }) => (
  <Hover>
    {hovering => (
      <div className="hover-container">
        {hovering === true && <div className="hover-tooltip">{text}</div>}
        {children}
      </div>
    )}
  </Hover>
);

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired,
};

export default Tooltip;
