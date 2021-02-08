import { SET_GECKOS, GET_GECKO, ADD_GECKO, ADD_EATING_LIST, GET_EATING_LIST } from 'redux/types';
import { findById, addOrFindAndRemove } from 'functions/functions';

const initialState = {
  data: [],
  gecko: null,
  geckos_id_eating_list: [],
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
        geckos_id_eating_list: addOrFindAndRemove(state.geckos_id_eating_list, action.payload),
      };
    case GET_EATING_LIST:
      return {
        ...state,
        eating_list: action.payload,
      };
    default:
      return state;
  }
}
