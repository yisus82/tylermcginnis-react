import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlayerInput extends Component {
  state = {
    username: '',
  };

  /**
   * Handles submit
   * @param {{ preventDefault: () => void; }} event Submit event
   */
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.username);
  };

  /**
   * Handles change
   * @param {{ target: { value: any; }; }} event Change event
   */
  handleChange = event => {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    return (
      <form className="column player" onSubmit={this.handleSubmit}>
        <label htmlFor="username" className="player-label">
          {this.props.label}
        </label>
        <div className="row player-inputs">
          <input
            type="text"
            id="username"
            className="input-light"
            placeholder="Github username"
            autoComplete="off"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <button
            className="btn dark-btn"
            type="submit"
            disabled={!this.state.username}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

PlayerInput.propTypes = {
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default PlayerInput;
