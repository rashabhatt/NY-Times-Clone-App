import { Box, Container, Grid } from '@mui/material';

import BriefNewsGrid from '../../shared/ArticlesLayouts/ArticlesSectionTwo/BriefNewsGrid';

const BriefNewsGridWrapper = (props: any) => {
  return (
    <Container>
      <Box className='max-w-[1200px] ml-auto mr-auto border-black border-t-[1px] border-b-[1px] pt-5 pb-5 mt-10 mb-10'>
        <Grid container>
          <Grid item xs={12} sm container>
            <Grid item xs container direction='row'>
              {props.news &&
                props.news.slice(0, 4).map((articles: any) => {
                  return (
                    <Grid key={articles.uri} item xs>
                      <BriefNewsGrid data={articles} />
                    </Grid>
                  );
                })}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default BriefNewsGridWrapper;
