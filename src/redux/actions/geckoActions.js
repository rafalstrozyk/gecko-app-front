import axios from 'axios';
import { format } from 'date-fns';
import { GET_GECKO, SET_GECKOS, ADD_GECKO, ADD_EATING_LIST, POST_EATING_LIST } from 'redux/types';

axios.defaults.baseURL = 'http://localhost:3000/';

export const getGeckos = () => (dispatch) => {
  axios
    .get('/gecko')
    .then((res) => {
      dispatch({ type: SET_GECKOS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getGecko = (id) => (dispatch) => {
  dispatch({ type: GET_GECKO, payload: id });
};

export const addGecko = (data) => (dispatch) => {
  const newGecko = {
    name: data.name,
    morph: data.morph,
    birth_date: data.birth,
    buy_date: data.buy,
  };
  axios
    .post('/gecko', newGecko)
    .then((res) => {
      axios
        .get(`/gecko/${res.data._id}`)
        .then((res) => {
          dispatch({ type: ADD_GECKO, payload: res.data[0] });
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

export const addToEatingArray = (id) => (dispatch) => {
  dispatch({ type: ADD_EATING_LIST, payload: id });
};

export const postEating = (data) => (dispatch) => {
  dispatch({ type: POST_EATING_LIST });
  const newEatingData = {
    date_eating: data.eatingDate,
    eat_type: data.eatType,
    geckos_id: data.geckos,
  };
  console.log(newEatingData);
  axios
    .post('/eating', newEatingData)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.log(err));
};
