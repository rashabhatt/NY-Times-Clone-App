import { Box, Grid } from '@mui/material';

const SquareImageNewsGrid = (props: any) => {
  return (
    <div>
      <Box className='ml-[3%]'>
        <Grid container className='border-t-[1px] pt-4 pb-4'>
          <Grid item xs={12} sm container>
            <a
              data-testid='square-news-image-grid-link'
              href={props.popularArticles?.url}
            >
              <Grid item xs container direction='row'>
                <Grid item xs={7}>
                  <h3
                    data-testid='square-news-image-grid-title'
                    className='text-[16px] leading-5 font-[700] '
                  >
                    {props.popularArticles?.title}
                  </h3>
                  <h3
                    data-testid='square-news-image-grid-type'
                    className='text-[10px] font-[500] mt-1 mb-2'
                  >
                    {props.popularArticles?.item_type}
                  </h3>
                </Grid>
                <Grid item xs={0.5}></Grid>
                <Grid item xs={3.5}>
                  <img
                    className='max-w-[120px]'
                    src={props.popularArticles?.multimedia?.[1]?.url}
                    alt='square-news-image-grid-image'
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

export default SquareImageNewsGrid;
