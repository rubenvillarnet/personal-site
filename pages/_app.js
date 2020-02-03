import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Router from 'next/router';
import lightTheme from '../styles/themes/light';
import darkTheme from '../styles/themes/dark';
import GlobalStyle from '../styles/GlobalStyle';
import { initGA, logPageView } from '../utils/analytics';
import withReduxStore from '../lib/with-redux-store';
import { Provider } from 'react-redux';

class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      isDarkTheme: this.props.reduxStore.getState().isDarkTheme
    };
  }

  componentDidMount() {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    const { isDarkTheme } = this.state;
    reduxStore.subscribe(() => {
      this.setState({
        isDarkTheme: reduxStore.getState().isDarkTheme
      });
    });
    return (
      <Provider store={reduxStore}>
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
