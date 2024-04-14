import axios from 'axios';
import { TopStoriesResponse } from '../models/top-stories.model';

const getTopStories = async () =>
  (
    await axios.get<TopStoriesResponse>(
      `${process.env.REACT_APP_NEWS_BASE_URL}/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`,
    )
  ).data;

export const TopStoriesService = { getTopStories };
