import axios from 'axios';
import { PopularNewsResponse } from '../models/popular-news.model';

const getPopularNews = async () =>
  (
    await axios.get<PopularNewsResponse>(
      `${process.env.REACT_APP_NEWS_BASE_URL}/mostpopular/v2/viewed/1.json?api-key=${process.env.REACT_APP_API_KEY}`,
    )
  ).data;

export const PopularNewsService = { getPopularNews };
