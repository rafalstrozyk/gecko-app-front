import axios from 'axios';
import { GET_GECKO, SET_GECKOS } from 'redux/types';

axios.defaults.baseURL = 'http://localhost:3000/';

export const getGeckos = () => (dispatch) => {
  axios.get('/gecko').then((res) => {
    console.log(res);
    dispatch({ type: SET_GECKOS, payload: res.data });
  });
};

export const getGecko = (id) => (dispatch) => {
  dispatch({type: GET_GECKO, payload: id});
}