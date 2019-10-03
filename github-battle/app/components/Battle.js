import React from 'react';
import Instructions from './Instructions';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';
import Results from './Results';

export default class Battle extends React.Component {
  state = {
    playerOne: null,
    playerTwo: null,
    battle: false,
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

  /**
   * Handles reset
   * @param {string} id Player Id
   */
  handleReset = id =>
    this.setState({
      [id]: null,
    });

  render = () => {
    const { playerOne, playerTwo, battle } = this.state;

    if (battle) {
      return (
        <Results
          playerOne={playerOne}
          playerTwo={playerTwo}
          onReset={() =>
            this.setState({
              playerOne: null,
              playerTwo: null,
              battle: false,
            })
          }
        />
      );
    }

    return (
      <React.Fragment>
        <Instructions />
        <div className="players-container">
          <h1 className="center-text header-lg">Players</h1>
          <div className="row space-around">
            {playerOne === null ? (
              <PlayerInput
                label="Player One"
                onSubmit={player => this.handleSubmit('playerOne', player)}
              />
            ) : (
              <PlayerPreview
                username={playerOne}
                label="Player One"
                onReset={() => this.handleReset('playerOne')}
              />
            )}
            {playerTwo === null ? (
              <PlayerInput
                label="Player Two"
                onSubmit={player => this.handleSubmit('playerTwo', player)}
              />
            ) : (
              <PlayerPreview
                username={playerTwo}
                label="Player Two"
                onReset={() => this.handleReset('playerTwo')}
              />
            )}
          </div>
          {playerOne && playerTwo && (
            <button
              type="button"
              className="btn dark-btn btn-space"
              onClick={() => this.setState({ battle: true })}
            >
              Battle
            </button>
          )}
        </div>
      </React.Fragment>
    );
  };
}
