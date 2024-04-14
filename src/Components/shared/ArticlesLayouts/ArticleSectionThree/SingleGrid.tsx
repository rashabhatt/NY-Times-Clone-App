import { Box, Container, Grid } from '@mui/material';

import { styled } from '@mui/material/styles';

const ArticleSubtitle = styled('div')({
  textAlign: 'left',
  fontSize: '14px',
  margin: '0 0 30px',
});

const ArticleDesc = styled('div')({
  color: '#696c89',
});

const GridMargin = styled('div')({
  margin: '20px',
});

const TitleAlign = styled('div')({
  textAlign: 'left',
  fontWeight: 700,
  paddingBottom: '5px',
});

const SingleGrid = (props: any) => {
  return (
    <>
      <Box className='max-w-[1200px]  border-black border-t-[1px] mt-8'>
        <Container>
          <GridMargin>
            <div data-testid='grid'>
              {props.data &&
                props.data.slice(3, 4).map((data: any) => {
                  return (
                    <Grid
                      container
                      direction={{ xs: 'column', md: 'row' }}
                      alignItems={'center'}
                      spacing={4}
                      key={data.uri}
                    >
                      <Grid item sm={12} lg={4}>
                        <TitleAlign>
                          <h3 data-testid='grid-facet'>
                            {data?.des_facet?.[0]}
                          </h3>
                        </TitleAlign>
                        <ArticleSubtitle>
                          <div data-testid='grid-abstract'>
                            {data?.abstract}
                          </div>
                        </ArticleSubtitle>
                        <ArticleDesc>
                          <TitleAlign>
                            <div data-testid='grid-byline'>
                              14h ago {data?.byline}
                            </div>
                          </TitleAlign>
                        </ArticleDesc>
                      </Grid>
                      <Grid item sm={12} lg={8}>
                        <img
                          data-testid='grid-logo'
                          src={data?.multimedia?.[0].url}
                          alt='grid-logo'
                        />
                      </Grid>
                    </Grid>
                  );
                })}
            </div>
          </GridMargin>
        </Container>
      </Box>
    </>
  );
};

export default SingleGrid;
