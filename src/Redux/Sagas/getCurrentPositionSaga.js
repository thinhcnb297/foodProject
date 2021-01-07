import {
  GET_CURRENT_POSITION_REQUEST,
  GET_CURRENT_POSITION_ERROR,
  GET_CURRENT_POSITION_SUCCESS,
} from '../Actions';
import {put, takeLatest} from 'redux-saga/effects';
import {APIKEYGOOGLEMAP} from '../../constants';

function* getCurrentPosition(action) {
  try {
    const {latitude, longitude} = action.coords;
    const response = yield fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${APIKEYGOOGLEMAP}`,
    ).then((res) => res.json());
    console.log(
      '🚀 ~ file: getCurrentPositionSaga.js ~ line 9 ~ function*getCurrentPosition ~ response',
      response,
    );
    yield put({type: GET_CURRENT_POSITION_SUCCESS, payload: response});
  } catch (error) {
    yield put({type: GET_CURRENT_POSITION_ERROR, error});
  }
}

export default function* getCurrentPositionSaga() {
  yield takeLatest(GET_CURRENT_POSITION_REQUEST, getCurrentPosition);
}
