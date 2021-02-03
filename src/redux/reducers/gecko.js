import { data } from 'data/data';
import { SET_GECKOS, GET_GECKO } from 'redux/types';
import { findById } from 'functions/functions';

const initialState = {
  data: data.data,
  gecko: 'coś',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_GECKOS:
      return {
        ...state,
        data: action.payload,
      };
    case GET_GECKO:
      return {
        ...state,
        gecko: findById(state.data, action.payload),
      };
    default:
      return state;
  }
}
