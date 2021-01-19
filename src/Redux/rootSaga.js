import {fork, all} from 'redux-saga/effects';
import getCurrentPositionSaga from './Sagas/getCurrentPositionSaga';

export default function* rootSaga() {
  yield all([fork(getCurrentPositionSaga)]);
}
