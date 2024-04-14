import { Box, Grid } from '@mui/material';

const CircularImageNewsGrid = (props: any) => {
  return (
    <div>
      <Box className='ml-[3%]'>
        <Grid container className='border-t-[1px] pt-4 pb-4'>
          <Grid item xs={12} sm container>
            <a
              data-testid='circular-news-image-grid-link'
              href={props.popularArticles?.url}
            >
              <Grid item xs container direction='row'>
                <Grid item xs={9}>
                  <h3
                    data-testid='circular-news-image-grid-byline'
                    className='text-[12px] font-[700] mb-2'
                  >
                    {props.popularArticles?.byline}
                  </h3>
                  <h3
                    data-testid='circular-news-image-grid-title'
                    className='text-[18px] leading-5 font-[700] mt-1'
                  >
                    {props.popularArticles?.title}
                  </h3>
                </Grid>
                <Grid item xs={0.5}></Grid>
                <Grid item xs={2.5}>
                  <img
                    className='rounded-full max-w-[50px]'
                    src={props.popularArticles?.multimedia?.[0]?.url}
                    alt='circular-news-image-grid-image'
                  />
                </Grid>
              </Grid>
            </a>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default CircularImageNewsGrid;
