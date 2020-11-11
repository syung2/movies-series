import { FETCH_MOVIES, SEARCH_MOVIE, FETCH_MOVIE, LOADING } from "./types";
import axios from "axios";
import { APIKey } from "../Apikey";

export const searchMovie = (text) => {
  return (dispatch) => {
    dispatch({
      type: SEARCH_MOVIE,
      payload: text,
    });
  };
};

export const fetchMovies = (text) => (dispatch) => {
  axios
    .get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
    .then((response) => {
      dispatch({
        type: FETCH_MOVIES,
        payload: response.data,
        loading: false,
      });
    })
    .catch((err) => console.log(err));
};

export const fetchMovie = (id) => (dispatch) => {
  axios
    .get(`http://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
    .then((response) => {
      dispatch({
        type: FETCH_MOVIE,
        payload: response.data,
      });
    })
    .catch((err) => console.log(err));
};

export const setLoading = () => {
  return {
    type: LOADING,
  };
};
