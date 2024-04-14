import { Box, Container, Grid } from '@mui/material';

import BannerGrid from '../../shared/ArticlesLayouts/ArticleSectionThree/BannerGrid';

const BannerGridWrappper = (props: any) => {
  return (
    <Container>
      <Box className='max-w-[1200px] ml-auto mr-auto border-black border-t-[1px] border-b-[1px] pt-5 pb-5 mt-10 mb-10'>
        <Grid item container sm>
          {props.news &&
            props.news.slice(0, 5).map((articles: any, index: any) => {
              return (
                <Grid item xs={12} sm container key={articles.uri}>
                  <div className='lg:border-r-[1px] lg:ml-3 mr-3' />
                  <Grid item xs container direction='row'>
                    <Grid item>
                      <BannerGrid data={articles} />
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </Container>
  );
};

export default BannerGridWrappper;
