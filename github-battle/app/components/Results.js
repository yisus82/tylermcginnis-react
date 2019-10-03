import React from 'react';
import PropTypes from 'prop-types';
import { battle } from '../utils/api';
import UserCard from './UserCard';

export default class Results extends React.Component {
  static propTypes = {
    playerOne: PropTypes.string.isRequired,
    playerTwo: PropTypes.string.isRequired,
    onReset: PropTypes.func.isRequired,
  };

  state = {
    winner: null,
    loser: null,
    error: null,
    loading: true,
  };

  componentDidMount = () => {
    const { playerOne, playerTwo } = this.props;

    battle([playerOne, playerTwo])
      .then(players => {
        this.setState({
          winner: players[0],
          loser: players[1],
          error: null,
          loading: false,
        });
      })
      .catch(({ message }) => {
        this.setState({
          error: message,
          loading: false,
        });
      });
  };

  render = () => {
    const { winner, loser, error, loading } = this.state;

    if (loading) {
      return <p>LOADING</p>;
    }

    if (error) {
      return <p className="center-text error">{error}</p>;
    }

    return (
      <React.Fragment>
        <div className="grid space-around container-sm">
          <UserCard
            label={winner.score === loser.score ? 'Tie' : 'Winner'}
            player={winner}
          />
          <UserCard
            label={winner.score === loser.score ? 'Tie' : 'Winner'}
            player={loser}
          />
        </div>
        <button
          type="button"
          onClick={this.props.onReset}
          className="btn dark-btn btn-space"
        >
          Reset
        </button>
      </React.Fragment>
    );
  };
}
