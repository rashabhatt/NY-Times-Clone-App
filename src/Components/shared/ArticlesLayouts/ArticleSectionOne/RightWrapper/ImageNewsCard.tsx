import { Box, Grid, styled } from '@mui/material';

const CardWrapper = styled('div')({
  fontSize: 16,
  fontWeight: 500,
  marginBottom: 15,
});

const ImageNewsCard = (props: any) => {
  return (
    <div>
      <Box className='ml-[3%]'>
        <Grid container className='border-black border-t-[1px] pt-2'>
          <Grid item>
            <a data-testid='image-news-card-link' href={props.data?.url}>
              <CardWrapper>
                <h3 className='text-[20px] font-[700] mt-1'>
                  {props.data?.des_facet[0]}
                </h3>
                <h3
                  data-testid='image-news-card-type'
                  className='text-[11px] font-[400] mt-1 mb-2'
                >
                  {props.data?.item_type}
                </h3>
                <div>
                  <img
                    src={props.data?.multimedia?.[1]?.url}
                    alt='image-news-card-image'
                  />
                </div>
              </CardWrapper>
            </a>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ImageNewsCard;
