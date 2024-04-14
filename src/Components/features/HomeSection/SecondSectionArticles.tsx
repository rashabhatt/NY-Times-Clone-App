import BriefNewsGridWrapper from '../../main/NewsSectionsWrapper/BriefNewsGridWrappper';
import PopularNews from '../../shared/ArticlesLayouts/ArticlesSectionTwo/PopularNews';

type SecondSectionArticlesProps = {
  popularNews: any;
  news: any;
};

const SecondSectionArticles = (
  props: SecondSectionArticlesProps,
  news: any,
) => {
  return (
    <>
      <BriefNewsGridWrapper data-testid='news-section-2' news={props.news} />
      <PopularNews data-testid='news-section' popularNews={props.popularNews} />
    </>
  );
};

export default SecondSectionArticles;
