import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';

const win = window;

const middlewares = [thunkMiddleware];

const storeEnhancers = compose(applyMiddleware(...middlewares), (win && win.devToolsExtension)
  ? win.devToolsExtension()
  : (f) => f,);

export default function configureStore() {
  return createStore(rootReducer, {}, storeEnhancers);
}
