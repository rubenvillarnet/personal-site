import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const defaultInitialState = {
  isDarkTheme: false
};

export const actionTypes = {
  SWITCH_THEME: 'SWITCH_THEME'
};

// REDUCERS
export const reducer = (state = defaultInitialState, action) => {
  switch (action.type) {
    case actionTypes.SWITCH_THEME: {
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme
      };
    }
    default:
      return state;
  }
};

// ACTIONS
export const switchTheme = () => {
  return { type: actionTypes.SWITCH_THEME };
};

let store;

function initStore(initialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const initialStore = useMemo(() => initializeStore(initialState), [
    initialState
  ]);
  return initialStore;
}
