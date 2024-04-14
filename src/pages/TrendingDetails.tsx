import { Box, Container, Grid } from '@mui/material';
import { gql, useQuery } from '@apollo/client';

import Advertisement from '../Components/features/Advertisement/Advertisements';
import { NEWS_TILE_DATA } from './Trending';
import { useParams } from 'react-router-dom';

export const GET_SINGLENEWS = gql`
  query newsList {
    newsdetails {
      title
      media {
        type
        url
        caption
      }
      section
      published
      id
      byline
      abstract
      ...NewsTile
    }
  }
  ${NEWS_TILE_DATA}
`;

const TrendingDetails: any = () => {
  const { id } = useParams();

  // This ensures we pass a string, even if useParams returns `undefined`
  const { data, loading, error } = useQuery(GET_SINGLENEWS, {
    variables: { id },
  });
  if (loading) return <h1>Loading...</h1>;
  if (error) return console.log(error);
  if (!data) return <h1>No Data</h1>;

  const news = data.newsdetails.find((item: any) => {
    if (id === item.id) return true;
  });

  return (
    <div>
      <div data-testid='news-advertisement' className='mt-[60px]'>
        <Advertisement />
      </div>
      <Container>
        <Box>
          <Grid container>
            <Grid sm={12} item>
              <div className='w-full sm:w-[600px] mx-auto mt-[30px]'>
                <h2
                  data-testid='news-section'
                  className=' text-[16px] leading-[24px] text-center  font-[700]'
                >
                  {news.section.toUpperCase()}
                </h2>

                <h2
                  data-testid='news-title'
                  className='text-[26px] sm:text-[55px] leading-[28px] sm:leading-[60px] my-5 text-center mx-auto font-[700]'
                >
                  {news.title}
                </h2>

                <h3
                  data-testid='news-published'
                  className='text-center mb-[20px]'
                >
                  {news.published}
                </h3>
                <img
                  className='mx-auto'
                  src={news.media[1].url}
                  alt='news-image'
                ></img>
                <h3
                  data-testid='news-abstract'
                  className='text-[20px] leading-[30px] my-5 mx-auto font-[400]'
                >
                  {news.abstract}
                </h3>
                <h3
                  data-testid='paragraph-1'
                  className='text-[20px] leading-[30px] my-5 mx-auto font-[400]'
                >
                  That’s not to say the researchers disagreed on everything. The
                  three-day meeting was infused with an implicit understanding
                  of what obesity is not: a personal failing. No presenter
                  argued that humans collectively lost willpower around the
                  1980s, when obesity rates took off, first in high-income
                  countries‌, then in much of the rest of the world. Not a
                  single scientist said our genes changed in that short time.
                  Laziness, gluttony‌‌ and sloth were not referred to as
                  obesity’s helpers. In stark contrast to a prevailing societal
                  view of obesity, which assumes people have full control over
                  their body size, they didn’t blame individuals for their
                  condition, the same way we don’t blame people suffering from
                  undernutrition challenges, like stunting and wasting.
                </h3>
                <h3
                  data-testid='paragraph-2'
                  className='text-[20px] leading-[30px] my-5 mx-auto font-[400]'
                >
                  The researchers instead referred to obesity as a complex,
                  chronic condition, and they were meeting to get to the bottom
                  of why humans have, collectively, grown larger over the past
                  half century. To that end, they shared a range of mechanisms
                  that might explain the global obesity surge. And their
                  theories, however diverse, made one thing obvious: As long as
                  we treat obesity as a personal responsibility issue, its
                  prevalence is unlikely to decline.
                </h3>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <div data-testid='news-advertisement'>
        <Advertisement />
      </div>
    </div>
  );
};

export default TrendingDetails;
