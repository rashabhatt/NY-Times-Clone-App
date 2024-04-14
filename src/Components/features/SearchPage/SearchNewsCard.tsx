import moment from 'moment';
import styleSheet from '../../../styles/SearchNewsCard.module.css';

const SearchNewsCard = (props: any) => {
  return (
    <div>
      <div className={styleSheet.card}>
        <div data-testid='news-published' className={styleSheet.timeAgo}>
          {' '}
          {moment(props.pub_date).format('ll')}{' '}
        </div>
        <div className={styleSheet.contentDiv}>
          <span>
            <p data-testid='news-section' className={styleSheet.newsType}>
              {' '}
              {props.section_name}{' '}
            </p>
            <h2 data-testid='news-abstract' className={styleSheet.titleH2}>
              {' '}
              {props.headline.main}{' '}
            </h2>
            <h4 data-testid='news-abstract' className={styleSheet.subTitleH4}>
              {' '}
              {props.abstract}{' '}
            </h4>
            <p data-testid='news-byline' className={styleSheet.newsAuthor}>
              {' '}
              {props.byline?.original}{' '}
            </p>
          </span>
          {props.multimedia && props.multimedia.length > 0 ? (
            <img
              width='350px'
              height='136px'
              style={{ paddingTop: '5px' }}
              src={'https://static01.nyt.com/' + props.multimedia[1]?.url}
              alt='search-image'
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export { SearchNewsCard };
