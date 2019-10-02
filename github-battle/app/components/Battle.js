import React from 'react';
import Instructions from './Instructions';
import PlayerInput from './PlayerInput';

export default class Battle extends React.Component {
  state = {
    playerOne: null,
    playerTwo: null,
  };

  /**
   * Handles submit
   * @param {string} id Player Id
   * @param {string} username Github username
   */
  handleSubmit = (id, username) =>
    this.setState({
      [id]: username,
    });

  render = () => {
    const { playerOne, playerTwo } = this.state;

    return (
      <React.Fragment>
        <Instructions />

        <div className="players-container">
          <h1 className="center-text header-lg">Players</h1>
          <div className="row space-around">
            {playerOne === null && (
              <PlayerInput
                label="Player One"
                onSubmit={username => this.handleSubmit('playerOne', username)}
              />
            )}

            {playerTwo === null && (
              <PlayerInput
                label="Player Two"
                onSubmit={username => this.handleSubmit('playerTwo', username)}
              />
            )}
          </div>
        </div>
      </React.Fragment>
    );
  };
}
