import { Box, Container, Grid } from '@mui/material';

import AbstractNewsCard from '../../shared/ArticlesLayouts/ArticleSectionOne/RightWrapper/AbstractNewsCard';
import CircularImageNewsGrid from '../../shared/ArticlesLayouts/ArticleSectionOne/RightWrapper/CircularImageNewsGrid';
import DetailedNewsCard from '../../shared/ArticlesLayouts/ArticleSectionOne/LeftWrapper/DetailedNewsCard';
import ImageNewsCard from '../../shared/ArticlesLayouts/ArticleSectionOne/RightWrapper/ImageNewsCard';
import NewsCardWrapper from '../../main/NewsSectionsWrapper/NewsCardWrapper';
import SquareImageNewsGrid from '../../shared/ArticlesLayouts/ArticleSectionOne/RightWrapper/SquareImageNewsGrid';

const FirstSectionArticles = (news: any) => {
  return (
    <div>
      <Container>
        <Box>
          <Grid container item sm={12}>
            <Grid className='lg:border-r-[1px] pr-[1%]' item sm={8}>
              {news.news &&
                news.news.slice(0, 7).map((articles: any) => {
                  return (
                    <DetailedNewsCard key={articles.uri} data={articles} />
                  );
                })}
            </Grid>
            <Grid item sm={4}>
              <AbstractNewsCard data={news.news?.[6]} />
              <NewsCardWrapper data={news.news} />
              <ImageNewsCard data={news.news?.[7]} />
              {news.news &&
                news.news.slice(9, 14).map((popularArticles: any) => {
                  return (
                    <CircularImageNewsGrid
                      key={popularArticles.uri}
                      popularArticles={popularArticles}
                    />
                  );
                })}
              {news.news &&
                news.news.slice(9, 14).map((popularArticles: any) => {
                  return (
                    <SquareImageNewsGrid
                      key={popularArticles.uri}
                      popularArticles={popularArticles}
                    />
                  );
                })}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default FirstSectionArticles;
