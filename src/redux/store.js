import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './sagas/rootSaga';
import feedsReducer from './reducer/feeds/feedsSlice';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  feeds: feedsReducer
});

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
});
sagaMiddleware.run(watcherSaga);

export default store;
