import React from 'react';
import { Search } from '../Components/features/SearchPage/Search';
import { SearchNewsCard } from '../Components/features/SearchPage/SearchNewsCard';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';

const InnerWrapper = styled('div')({
  backgroundColor: '#f7f7f7',
  display: 'flex',
  justifyContent: 'center',
  ['@media (max-width: 1000px)']: {
    flexDirection: 'column',
  },
  select: {
    marginLeft: '30px',
    border: 'none',
    width: '146px',
    padding: '5px 5px 5px 5px',
    backgroundColor: '#f7f7f7',
    fontSize: '14px',
    option: {
      fontSize: '14px',
    },
    hover: {
      border: '1px solid #ddd',
    },
  },
});

const OuterWrapper = styled('div')({
  backgroundColor: '#f7f7f7',
  padding: '18px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  '.intrestSearch': {
    marginLeft: '340px',
  },
  ['@media (min-width: 768px)']: {
    paddingLeft: '200px',
  },
});

const SearchBox = styled('div')`
  margin: 100px 500px;

  @media (max-width: 1000px) {
    display: block;
    margin: 100px 80px;
  }
`;

const SearchPage = () => {
  const [interest, setInterest] = React.useState({ types: '' });
  const [selectRelevance, setSelectRelevance] = React.useState('');
  const { searchedNews } = useSelector((state) => state.searchedData);

  return (
    <div className='mt-[60px]'>
      <OuterWrapper>
        <InnerWrapper>
          <Search types={interest.types} sort={selectRelevance} />
          <select
            onClick={(e) => setSelectRelevance(e.target.value)}
            className='select'
          >
            <option value=''>Sort by Relevance</option>
            <option value='newest'>Sort by Newest</option>
            <option value='oldest'>Sort by Oldest</option>
          </select>
        </InnerWrapper>
      </OuterWrapper>
      {searchedNews?.length > 0 ? (
        searchedNews?.map((item, index) => (
          <SearchNewsCard key={index} {...item} />
        ))
      ) : (
        <SearchBox>
          <h1>No Result Found</h1>
        </SearchBox>
      )}
    </div>
  );
};

export { SearchPage };
