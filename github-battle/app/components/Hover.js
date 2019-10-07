import React from 'react';
import PropTypes from 'prop-types';

export default class Hover extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  };

  state = {
    hovering: false,
  };

  mouseOver = () =>
    this.setState({
      hovering: true,
    });

  mouseOut = () =>
    this.setState({
      hovering: false,
    });

  render = () => (
    <div
      onMouseOver={this.mouseOver}
      onFocus={this.mouseOver}
      onMouseOut={this.mouseOut}
      onBlur={this.mouseOut}
    >
      {this.props
        // @ts-ignore
        .children(this.state.hovering)}
    </div>
  );
}
