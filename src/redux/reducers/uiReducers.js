import { AFTER_TEMPLATE_IS_OPEN } from 'redux/types';

const initialState = {
  afterTemplateOpen: true,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case AFTER_TEMPLATE_IS_OPEN:
      return {
        ...state,
        afterTemplateOpen: action.payload,
      };
    default:
      return state;
  }
}
