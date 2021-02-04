import { AFTER_TEMPLATE_IS_OPEN } from 'redux/types';

export const setAfterTemplateIsOpen = (bool) => (dispatch) => {
  dispatch({ type: AFTER_TEMPLATE_IS_OPEN, payload: bool });
};
