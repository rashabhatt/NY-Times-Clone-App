import axios, * as others from 'axios';

import { ActionType } from '../ActionTypes/actionTypes';
import { Dispatch } from 'redux';

const getRequest = () => {
  return {
    type: ActionType.GET_REQUEST,
  };
};

const getSuccess = (payload: string) => {
  return {
    type: ActionType.GET_SUCCESS,
    payload,
  };
};

const getFailure = (payload: any) => {
  return {
    type: ActionType.GET_FAILURE,
    payload,
  };
};

export const fetchNewsData = (searchQuery: string, types: any, sort: any) => {
  return async (dispatch: Dispatch) => {
    dispatch(getRequest());
    try {
      const searchedData = async () => {
        const response = await axios.get(
          `${process.env.REACT_APP_NEWS_BASE_URL}/search/v2/articlesearch.json?api-key=${process.env.REACT_APP_API_KEY}&q=${searchQuery}&types=${types}&sort=${sort}`,
        );
        const action = getSuccess(response?.data?.response?.docs);
        dispatch(action);
      };
      searchedData();
    } catch (error) {
      dispatch(getFailure(error));
    }
  };
};
