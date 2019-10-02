import React from 'react';
import PropTypes from 'prop-types';

const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

class LanguagesNav extends React.Component {
  static propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onUpdateLanguage: PropTypes.func.isRequired,
  };

  render = () => {
    const { selectedLanguage, onUpdateLanguage } = this.props;

    return (
      <ul className="flex-center">
        {languages.map(language => (
          <li key={language}>
            <button
              type="button"
              className="btn-clear nav-link"
              style={
                language === selectedLanguage
                  ? { color: 'rgb(187, 46, 31)' }
                  : null
              }
              onClick={() => onUpdateLanguage(language)}
            >
              {language}
            </button>
          </li>
        ))}
      </ul>
    );
  };
}

export default LanguagesNav;
