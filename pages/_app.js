import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Router from 'next/router';

import lightTheme from '../styles/themes/light';
import darkTheme from '../styles/themes/dark';
import GlobalStyle from '../styles/GlobalStyle';
import { initGA, logPageView } from '../utils/analytics';
import { useStore } from '../store';

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const [isDarkTheme, setDarkTheme] = useState(store.getState().isDarkTheme);

  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  store.subscribe(() => {
    setDarkTheme(store.getState().isDarkTheme);
  });

  return (
    <Provider store={store}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
