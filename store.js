import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

const exampleInitialState = {
  isDarkTheme: false
};

export const actionTypes = {
  SWITCH_THEME: 'SWITCH_THEME'
};

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
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

export function initializeStore(initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
