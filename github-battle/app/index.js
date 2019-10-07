import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from './contexts/theme';
import Popular from './components/Popular';
import Battle from './components/Battle';
import Nav from './components/Nav';

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
    <ThemeProvider value={{ ...this.state }}>
      <div className={this.state.theme}>
        <div className="container">
          <Nav />
          <Popular />
          <Battle />
        </div>
      </div>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
