import {
  GET_CURRENT_POSITION_ERROR,
  GET_CURRENT_POSITION_SUCCESS,
  GET_CURRENT_POSITION_REQUEST,
} from '../Actions';

const initialState = {
  loading: false,
  currentPosition: [],
  error: null,
};

const getCurrentPositionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_POSITION_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_CURRENT_POSITION_SUCCESS: {
      return {
        ...state,
        loading: false,
        currentPosition: action.payload,
      };
    }
    case GET_CURRENT_POSITION_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default:
      return null;
  }
};
export default getCurrentPositionReducer;
