import { takeLatest } from 'redux-saga/effects';
import { handleGetFeeds } from './handlers/feeds';
import { getFeeds } from '../reducer/feeds/feedsSlice';

export function* watcherSaga() {
  yield takeLatest(getFeeds.type, handleGetFeeds);
}
