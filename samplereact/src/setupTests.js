// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
// src/setupTests.js
import React from 'react';
import ReactDOM from 'react-dom';

import thunk from 'redux-thunk';
import reducers from '../reducers';

const store = createStore(reducers, applyMiddleware(thunk));

const renderWithProviders = (ui) => {
  return ReactDOM.render(<Provider store={store}>{ui}</Provider>, document.createElement('div'));
};

export { renderWithProviders };
