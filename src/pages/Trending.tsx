import { CardActionArea, Container, Grid } from '@mui/material';
import { gql, useQuery } from '@apollo/client';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export const NEWS_TILE_DATA = gql`
  fragment NewsTile on News {
    __typename
    id
    title
    abstract
    section
    published
  }
`;

export const GET_ALLNEWS = gql`
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

const GridStyle = styled('div')({
  '& .MuiGrid-root': {
    ['@media (max-width: 1000px)']: {
      padding: '0 9%',
    },
  },
});

const CardStyle = styled('div')({
  marginLeft: '40px',
  marginBottom: '40px',
});

const Trending = () => {
  const { data, loading, error } = useQuery(GET_ALLNEWS);
  if (loading) return <h1> Loading ...</h1>;
  if (error) return <h1>Error No Data</h1>;
  return (
    <div>
      <div style={{ marginTop: '80px' }}>
        <Typography
          variant='h2'
          style={{ display: 'inline-block', marginLeft: '50px' }}
        >
          Trending
        </Typography>
        <div
          style={{
            padding: '1px',
            borderTop: '1px solid  #000',
            borderBottom: '1px solid #000',
            width: '95%',
            margin: '30px auto',
          }}
        ></div>
        <div className='mt-10 mb-10'>
          <Container>
            <GridStyle>
              <Grid container item spacing={2} sm={12}>
                {data.newsdetails
                  .slice(0, 20)
                  .map((trending: any, index: any) => {
                    const { id, title, media } = trending;
                    return (
                      <CardStyle key={index}>
                        <Link to={`/trendings/${id}`} key={trending.id}>
                          <Card sx={{ maxWidth: 250, height: '100%' }}>
                            <CardActionArea>
                              <CardMedia
                                component='img'
                                height='140'
                                src={media[1].url}
                                alt='green iguana'
                              />
                              <CardContent>
                                <Typography className='text-[12px] leading-5 font-[300] mt-2'>
                                  {title}
                                </Typography>
                              </CardContent>
                            </CardActionArea>
                          </Card>
                        </Link>
                      </CardStyle>
                    );
                  })}
              </Grid>
            </GridStyle>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Trending;
