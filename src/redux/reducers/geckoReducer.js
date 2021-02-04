import { data } from 'data/data';
import { SET_GECKOS, GET_GECKO, ADD_GECKO, ADD_EATING_LIST } from 'redux/types';
import { findById, addOrFindAndRemove } from 'functions/functions';

const initialState = {
  data: data.data,
  gecko: null,
  eating_list: [],
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
    case ADD_GECKO:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case ADD_EATING_LIST:
      return {
        ...state,
        eating_list: addOrFindAndRemove(state.eating_list, action.payload),
      };
    default:
      return state;
  }
}
