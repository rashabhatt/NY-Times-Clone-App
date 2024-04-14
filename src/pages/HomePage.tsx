import { FC, useEffect, useState } from 'react';
import { PopularNewsResponse, TopStoriesResponse } from '../models';
import { PopularNewsService, TopStoriesService } from '../services';

import Advertisements from '../Components/features/Advertisement/Advertisements';
import FirstSectionArticles from '../Components/features/HomeSection/FirstSectionArticles';
import SecondSectionArticles from '../Components/features/HomeSection/SecondSectionArticles';
import ThirdSectionArticles from '../Components/features/HomeSection/ThirdSectionArticles';

const Home: FC = () => {
  const [news, setNews] = useState<TopStoriesResponse | null>(null);
  const [popularNews, setPopularNews] = useState<PopularNewsResponse | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getTopStories();
    getPopularNews();
  }, []);
  const getTopStories = async () => {
    try {
      const news = TopStoriesService.getTopStories();
      news.then((res) => {
        setNews(res.results);
      });
    } catch (err: any) {
      console.log(err);
    }
    setLoading(false);
  };

  const getPopularNews = async () => {
    try {
      const popularNews = PopularNewsService.getPopularNews();
      popularNews.then((response) => {
        setPopularNews(response.results);
      });
    } catch (err: any) {
      console.log(err);
    }
  };

  return loading ? (
    <div>
      <h1>Loading...</h1>
    </div>
  ) : (
    <div>
      <div className='mt-[80px]'>
        <FirstSectionArticles news={news} />
        <Advertisements />
        <SecondSectionArticles news={news} popularNews={popularNews} />
        <Advertisements />
        <ThirdSectionArticles news={news} />
      </div>
    </div>
  );
};

export default Home;
