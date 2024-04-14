import { Box, Grid, styled } from '@mui/material';

const CardWrapper = styled('div')({
  fontSize: 16,
  fontWeight: 500,
  marginBottom: 15,
});

const BannerGrid = (props: any) => {
  return (
    <div>
      <Box>
        <Grid container>
          <Grid item>
            <a data-testid='banner-link' href={props.data?.url}>
              <CardWrapper>
                <div>
                  <img
                    data-testid='banner-image'
                    src={props.data?.multimedia[1]?.url}
                    alt='banner-image'
                  />
                </div>
                <h2
                  data-testid='banner-title'
                  className='text-[16px] leading-5 font-[700] mt-2'
                >
                  {props.data?.title}
                </h2>
                <h3
                  data-testid='banner-type'
                  className='text-[10px] font-[400] mt-1'
                >
                  {props.data?.item_type}
                </h3>
              </CardWrapper>
            </a>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default BannerGrid;
