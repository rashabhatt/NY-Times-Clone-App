/*
 * Project: New-York-Times Clone APP
 * File: utlis.js
 * File Created on Thu Dec 01 2022
 * Author: Rashi Bhatt (rashi.bhatt@mutualmobile.com)
 * -----
 * Last Modified: 1, Thu Dec 01 2022 3:09:04 PM
 * Modified By: Rashi Bhatt (rashi.bhatt@mutualmobile.com)
 * -----
 * Copyright (c) 2022 Mutual Mobile
 */
import axios from 'axios';

export const BASE_URL = 'https://api.nytimes.com/svc';

export const newsData = async (query) => {
  try {
    return await axios.get(
      `${BASE_URL}/search/v2/articlesearch.json?query=${query}`,
    );
  } catch (e) {
    return [];
  }
};

export const API = 'https://api.nytimes.com/svc/topstories/v2';

export const fetchData = async (query) => {
  const url = `${API}/home.json?api-key=ctGZBlaZtCtwByyl3HYUy1lWCD1A1GVz?query=${query}`;

  return await axios.get(url);
};
fetchData('react');

export const homeData = async (term) => {
  const response = await axios.get(
    `${BASE_URL}/home.json?api-key=ctGZBlaZtCtwByyl3HYUy1lWCD1A1GVz`,
    {
      params: {
        query: term,
      },
    },
  );

  return response.data.results;
};

export const NEWS_URL = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/';
export const newsSectionData = async (news) => {
  const response = await axios.get(
    `${NEWS_URL}/1.json?api-key=ctGZBlaZtCtwByyl3HYUy1lWCD1A1GVz`,
    {
      params: {
        query: news,
      },
    },
  );

  return response.data.results;
};

export const STORIES_URL = 'https://api.nytimes.com/svc/topstories/v2';
export const singleGridData = async (grid) => {
  const response = await axios.get(
    `${STORIES_URL}/home.json?api-key=ctGZBlaZtCtwByyl3HYUy1lWCD1A1GVz`,
    {
      params: {
        query: grid,
      },
    },
  );

  return response.data.results;
};

export const SEARCH_URL = 'https://api.nytimes.com/svc/search/v2/';
export const searchData = async (grid) => {
  const response = await axios.get(
    `${STORIES_URL}/articlesearch.json?api-key=ctGZBlaZtCtwByyl3HYUy1lWCD1A1GVz`,
    {
      params: {
        query: grid,
      },
    },
  );

  return response.data.results;
};
