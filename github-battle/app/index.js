import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import { ThemeProvider } from './contexts/theme';
import Popular from './components/Popular';
import Battle from './components/Battle';
import Nav from './components/Nav';
import Results from './components/Results';

class App extends React.Component {
  state = {
    theme: 'light',
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === 'light' ? 'dark' : 'light',
      }));
    },
  };

  render = () => (
    <Router>
      <ThemeProvider value={{ ...this.state }}>
        <div className={this.state.theme}>
          <div className="container">
            <Nav />
            <Route exact path="/" component={Popular} />
            <Route exact path="/battle" component={Battle} />
            <Route path="/battle/results" component={Results} />
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
