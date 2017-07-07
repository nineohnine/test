import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import middleware from '../middleware';

const sagaMiddleware = createSagaMiddleware();

const enhancers = [];

enhancers.push(sagaMiddleware);

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  enhancers.push(logger);
}

const enhancer = compose(applyMiddleware(...enhancers));

export default function configureStore(initialState){

  const store = createStore(reducer, initialState, enhancer);

  if(module.hot) {
    module.hot.accept(() => {
      const nextReducer = require('../reducers/index').default;
      store.replaceReducer(nextReducer);
    });
  }

  sagaMiddleware.run(middleware);

  return store;
}
