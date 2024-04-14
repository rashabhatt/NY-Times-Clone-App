import { Container, Grid } from '@mui/material';

type PopularNewsProps = {
  popularNews: any;
};

const PopularNews = (props: PopularNewsProps) => {
  return (
    <Container className='mt-10 mb-10'>
      <Grid
        container
        rowSpacing={4}
        columnSpacing={2}
        data-testid='popular-news-section'
      >
        {props.popularNews &&
          props.popularNews.map((article: any) => {
            const { url, id, title, type, section, media } = article; // eslint-disable-line
            return (
              <Grid item sm={2} key={id}>
                <div>
                  <a data-testid='popular-news-section-link' href={url}>
                    <h2 className='font-bold text-[15px] mb-1'>{section}</h2>
                    {media.map((img: any) => {
                      const { copyright } = img;
                      return (
                        <div key={copyright}>
                          <img
                            data-testid='popular-news-section-image'
                            src={img?.['media-metadata']?.[1]?.url}
                            alt='popular-news-section-image'
                          />
                        </div>
                      );
                    })}
                    <h2
                      data-testid='popular-news-section-title'
                      className='text-[14px] leading-5 font-[300] mt-2'
                    >
                      {title}
                    </h2>
                    <h2
                      data-testid='popular-news-section-type'
                      className='text-[10px] mt-1 font-bold'
                    >
                      Type : {type}
                    </h2>
                  </a>
                </div>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
};

export default PopularNews;
