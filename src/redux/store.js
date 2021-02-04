import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import geckosReducer from 'redux/reducers/geckoReducer';
import uiReducer from 'redux/reducers/uiReducers';

const initialState = {};

const middleware = [thunk];

const stateTree = combineReducers({
  geckos: geckosReducer,
  ui: uiReducer,
});

const store = createStore(
  stateTree,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
