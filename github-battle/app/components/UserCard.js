import React from 'react';
import PropTypes from 'prop-types';
import {
  FaCompass,
  FaBriefcase,
  FaCode,
  FaUsers,
  FaUserFriends,
  FaUser,
} from 'react-icons/fa';

const UserCard = ({ label, player }) => (
  <div className="card bg-light">
    <h4 className="header-lg center-text">{label}</h4>
    <img
      className="avatar"
      src={player.profile.avatar_url}
      alt={`Avatar for ${player.profile.login}`}
    />
    <h4 className="center-text">Score: {player.score.toLocaleString()}</h4>
    <h2 className="center-text">
      <a className="link" href={player.profile.html_url}>
        {player.profile.login}
      </a>
    </h2>
    <ul className="card-list">
      <li>
        <FaUser color="rgb(239, 115, 115)" size={22} />
        {player.profile.name}
      </li>
      {player.profile.location && (
        <li>
          <FaCompass color="rgb(144, 115, 255)" size={22} />
          {player.profile.location}
        </li>
      )}
      {player.profile.company && (
        <li>
          <FaBriefcase color="#795548" size={22} />
          {player.profile.company}
        </li>
      )}
      <li>
        <FaUsers color="rgb(129, 195, 245)" size={22} />
        {player.profile.followers.toLocaleString()} followers
      </li>
      <li>
        <FaUserFriends color="rgb(64, 183, 95)" size={22} />
        {player.profile.following.toLocaleString()} following
      </li>
      <li>
        <FaCode color="rgb(64, 64, 64)" size={22} />
        {player.profile.public_repos.toLocaleString()} repositories
      </li>
    </ul>
  </div>
);

UserCard.propTypes = {
  label: PropTypes.string.isRequired,
  player: PropTypes.object.isRequired,
};

export default UserCard;
