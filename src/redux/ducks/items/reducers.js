import * as types from './types';

const initialState = {
  isLoaded: false,
  items: {},
};

export default function reducer(state = initialState, action = '') {
  switch (action.type) {
    case types.SET_ITEMS:
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    default:
      return state;
  }
}
