import { call, put } from 'redux-saga/effects';
import { setFeeds } from '../../reducer/feeds/feedsSlice';
import { requestGetFeeds } from '../requests/feeds';

export function* handleGetFeeds() {
  try {
    const response = yield call(requestGetFeeds);
    const { data } = response;
    yield put(setFeeds({ ...data }));
  } catch (error) {
    console.log(error);
  }
}
