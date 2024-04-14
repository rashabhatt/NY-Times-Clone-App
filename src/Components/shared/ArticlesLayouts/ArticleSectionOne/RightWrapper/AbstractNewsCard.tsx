import { Box, Grid, styled } from '@mui/material';

const CardWrapper = styled('div')({
  fontSize: 16,
  fontWeight: 500,
  marginBottom: 15,
});

const AbstractNewsCard = (props: any) => {
  return (
    <div>
      <Box className='border-t-[1px] border-black ml-[3%] pt-[20px]'>
        <Grid container>
          <Grid item>
            <a data-testid='abstract-news-card-link' href={props.data?.url}>
              <CardWrapper>
                <div>
                  <img
                    src={props.data?.multimedia?.[1]?.url}
                    alt='abstract-news-card-image'
                  />
                </div>
                <h2
                  data-testid='abstract-news-card-title'
                  className='text-[24px] leading-7 font-[400] mt-2'
                >
                  {props.data?.title}
                </h2>
                <h2
                  data-testid='abstract-news-card-abstract'
                  className='text-[14px] leading-5 font-[400] mt-2'
                >
                  {props.data?.abstract}
                </h2>
                <h3
                  data-testid='abstract-news-card-type'
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
export default AbstractNewsCard;
