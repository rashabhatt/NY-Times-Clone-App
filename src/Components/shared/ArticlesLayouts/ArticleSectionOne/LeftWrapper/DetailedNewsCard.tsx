import { Box, Grid } from '@mui/material';

const DetailedNewsCard = (props: any) => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} sm container>
          <Grid item xs container direction='row'>
            <Grid item xs>
              <div>
                <Box className='border-black border-t-[1px] pt-6 pb-6'>
                  <Grid container>
                    <Grid item xs={12} sm container>
                      <a href={props.data?.url}>
                        <Grid
                          item
                          xs
                          container
                          direction={{ xs: 'column', md: 'row' }}
                          rowSpacing={3}
                        >
                          <Grid item xs={4}>
                            <h3
                              data-testid='detailed-news-card-title'
                              className='text-[16px] leading-5 font-[700] '
                            >
                              {props.data?.title}
                            </h3>
                            <h3
                              data-testid='detailed-news-card-abstract'
                              className='text-[14px] leading-5 font-[400] mt-1'
                            >
                              {props.data?.abstract}
                            </h3>
                            <h3
                              data-testid='detailed-news-card-type'
                              className='text-[10px] font-[500] mt-1 mb-2'
                            >
                              {props.data?.item_type}
                            </h3>
                          </Grid>
                          <Grid item xs={0.5}></Grid>
                          <Grid item xs={7.5}>
                            <img
                              className=''
                              src={props.data?.multimedia?.[0]?.url}
                              alt='detailed-news-card-image'
                            />
                          </Grid>
                        </Grid>
                      </a>
                    </Grid>
                  </Grid>
                </Box>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DetailedNewsCard;
