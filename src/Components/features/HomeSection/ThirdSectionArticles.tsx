import { Box, Container, Grid } from '@mui/material';

import BannerGridWrappper from '../../main/NewsSectionsWrapper/BannerGridWrappper';
import SingleGrid from '../../shared/ArticlesLayouts/ArticleSectionThree/SingleGrid';

type ThirdSectionArticlesProps = {
  news: any;
};

const ThirdSectionArticles = (props: ThirdSectionArticlesProps) => {
  return (
    <div>
      <Container>
        <Box>
          <Grid container item sm={12}>
            <SingleGrid data={props.news} />
            <BannerGridWrappper news={props.news} />
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default ThirdSectionArticles;
