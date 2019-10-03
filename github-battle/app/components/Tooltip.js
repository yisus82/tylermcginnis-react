import React from 'react';
import PropTypes from 'prop-types';

export default class Tooltip extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  };

  state = {
    hovering: false,
  };

  startHover = () =>
    this.setState({
      hovering: true,
    });

  endHover = () =>
    this.setState({
      hovering: false,
    });

  render = () => {
    const { text, children } = this.props;
    const { hovering } = this.state;

    return (
      <div
        onMouseOver={this.startHover}
        onFocus={this.startHover}
        onMouseOut={this.endHover}
        onBlur={this.endHover}
        className="hover-container"
      >
        {hovering === true && <div className="hover-tooltip">{text}</div>}
        {children}
      </div>
    );
  };
}
