import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Router from 'next/router';
import theme from '../styles/theme';
import GlobalStyle from '../styles/GlobalStyle';
import { initGA, logPageView } from '../utils/analytics';

export default class MyApp extends App {
  componentDidMount() {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
