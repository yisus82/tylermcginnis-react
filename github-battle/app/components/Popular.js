import React from 'react';
import { fetchPopularRepos } from '../utils/api';
import LanguagesNav from './LanguagesNav';

export default class Popular extends React.Component {
  state = {
    selectedLanguage: 'All',
    repos: null,
    error: null,
  };

  componentDidMount = () => this.updateLanguage(this.state.selectedLanguage);

  /**
   * Updates the selected language
   * @param {string} selectedLanguage Selected language
   */
  updateLanguage = selectedLanguage => {
    this.setState({ selectedLanguage, repos: null, error: null });
    fetchPopularRepos(selectedLanguage)
      .then(repos =>
        this.setState({
          repos,
          error: null,
        })
      )
      .catch(error => {
        console.warn('Error fetching repos: ', error);

        this.setState({
          error: `There was an error fetching the repositories.`,
        });
      });
  };

  /**
   * Checks if component is loading repos
   */
  isLoading = () => this.state.repos === null && this.state.error === null;

  render = () => {
    const { selectedLanguage, repos, error } = this.state;

    return (
      <React.Fragment>
        <LanguagesNav
          selectedLanguage={selectedLanguage}
          onUpdateLanguage={this.updateLanguage}
        />
        {this.isLoading() && <p>LOADING</p>}
        {error && <p>{error}</p>}
        {repos && <pre>{JSON.stringify(repos, null, 2)}</pre>}
      </React.Fragment>
    );
  };
}
