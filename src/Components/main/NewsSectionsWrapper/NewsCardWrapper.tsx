import { Box, Grid } from '@mui/material';

import ArticleWithTitle from '../../shared/ArticlesLayouts/ArticleSectionOne/RightWrapper/ArticleWithTitle';

const NewsCardWrapper = (props: any) => {
  return (
    <div>
      <Box className='ml-[3%]'>
        <Grid container className=' border-t-[1px] pt-4 pb-4'>
          <Grid item xs={12} sm container>
            <Grid item xs container direction='row'>
              <Grid className='border-r-[1px] pr-4' item xs={6}>
                <ArticleWithTitle data={props.data?.[21]} />
              </Grid>
              <Grid className='pl-4' item xs={6}>
                <ArticleWithTitle data={props.data?.[25]} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default NewsCardWrapper;
