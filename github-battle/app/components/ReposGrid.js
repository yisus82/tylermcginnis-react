import React from 'react';
import PropTypes from 'prop-types';
import {
  FaUser,
  FaStar,
  FaCodeBranch,
  FaExclamationTriangle,
} from 'react-icons/fa';

const ReposGrid = ({ repos }) => (
  <ul className="grid space-around">
    {repos.map((repo, index) => {
      const {
        name,
        owner,
        html_url: htmlUrl,
        stargazers_count: stargazersCount,
        forks,
        open_issues: openIssues,
      } = repo;
      const { login, avatar_url: avatarUrl } = owner;

      return (
        <li key={htmlUrl} className="card bg-light">
          <h4 className="header-lg center-text">#{index + 1}</h4>
          <img className="avatar" src={avatarUrl} alt={`Avatar for ${login}`} />
          <h2 className="center-text">
            <a className="link" href={htmlUrl}>
              {name}
            </a>
          </h2>
          <ul className="card-list">
            <li>
              <FaUser color="rgb(255, 191, 116)" size={22} />
              <a href={`https://github.com/${login}`}>{login}</a>
            </li>
            <li>
              <FaStar color="rgb(255, 215, 0)" size={22} />
              {stargazersCount.toLocaleString()} stars
            </li>
            <li>
              <FaCodeBranch color="rgb(129, 195, 245)" size={22} />
              {forks.toLocaleString()} forks
            </li>
            <li>
              <FaExclamationTriangle color="rgb(241, 138, 147)" size={22} />
              {openIssues.toLocaleString()} open
            </li>
          </ul>
        </li>
      );
    })}
  </ul>
);

ReposGrid.propTypes = { repos: PropTypes.array.isRequired };

export default ReposGrid;
