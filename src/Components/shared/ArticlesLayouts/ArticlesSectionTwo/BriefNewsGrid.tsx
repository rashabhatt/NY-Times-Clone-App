import { Box, Grid } from '@mui/material';

const BriefNewsGrid = (props: any) => {
  return (
    <div>
      <Box
        sx={{
          mx: 'auto',
          width: 270,
        }}
      >
        <Grid container>
          <Grid item xs={12} sm container>
            <a data-testid='brief-news-grid-link' href={props.data?.url}>
              <Grid item xs container direction='row'>
                <Grid item xs>
                  <h3 className='text-[16px] leading-5 font-[700] '>
                    {props.data?.des_facet?.[0]}
                  </h3>
                  <h3
                    data-testid='brief-news-grid-title'
                    className='text-[14px] leading-5 font-[400] mt-1'
                  >
                    {props.data?.title}
                  </h3>
                  <h3
                    data-testid='brief-news-grid-type'
                    className='text-[10px] font-[500] mt-1 mb-2'
                  >
                    {props.data?.item_type}
                  </h3>
                </Grid>
                <Grid item>
                  <img
                    data-testid='brief-news-grid-image'
                    className='max-w-[100px]'
                    src={props.data?.multimedia?.[1]?.url}
                    alt='brief-news-grid-image'
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

export default BriefNewsGrid;
