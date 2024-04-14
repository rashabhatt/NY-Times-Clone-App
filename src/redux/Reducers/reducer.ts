/* eslint-disable @typescript-eslint/no-var-requires */
/*
 * Project: New-York-Times Clone APP
 * File: reducers.js
 * Author: Rashi Bhatt (rashi.bhatt@mutualmobile.com)
 * -----
 * Last Modified: 13, tue Dec 13 2022 6:23:03 PM
 * Modified By: Rashi Bhatt (rashi.bhatt@mutualmobile.com)
 * -----
 * Copyright (c) 2022 Mutual Mobile
 */

import { Action, ActionType } from '../ActionTypes/actionTypes';

import { SearchedNewsData } from '../../models/search-data.model';

export interface State {
  searchedNews: SearchedNewsData[];
  isLoading: boolean;
  isError: string | null;
}

const initialState = {
  searchedNews: [],
  isLoading: false,
  isError: null,
};

const searchedReducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.GET_REQUEST:
      return {
        ...state,
        isError: null,
        isLoading: true,
      };
    case ActionType.GET_SUCCESS:
      return {
        ...state,
        isError: null,
        searchedNews: action.payload,
        isLoading: false,
      };
    case ActionType.GET_FAILURE:
      return {
        ...state,
        isError: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default searchedReducer;
