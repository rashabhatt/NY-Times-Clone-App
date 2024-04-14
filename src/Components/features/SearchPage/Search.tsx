import { IconButton, InputBase } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../redux/Stores/hooks';

import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { fetchNewsData } from '../../../redux/ActionCreator/searchAction';
import { styled } from '@mui/material/styles';

const SearchStyle = styled('div')({
  padding: '2px 4px',
  display: 'flex',
  alignItems: 'center',
  width: '655px',
  height: '46px',
  ['@media (max-width: 1000px)']: {
    maxWidth: '100%',
  },
  '& .MuiInputBase-input': {
    fontSize: '22px',
    fontWeight: '500',
    ['@media (max-width: 1000px)']: {
      fontSize: '20px',
    },
  },
});

const SearchInput = styled('div')(({ theme }) => ({
  '& .MuiInputBase-root': {
    marginLeft: theme.spacing(1),
    flex: 1,
    width: '580px',
    fontSize: '35px',
    fontWeight: '700',
    ['@media (max-width: 1000px)']: {
      width: '300px',
      fontSize: '25px',
    },
    '&:hover': { borderBottom: '1px solid #ddd' },
  },
}));

const IconStyle = styled('div')({
  padding: 10,
});

const Search = ({ types, sort }: any) => {
  const dispatch = useAppDispatch();
  const [query, setQuery] = React.useState('');
  const { searchedData } = useAppSelector((state) => state.searchedData);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e?.preventDefault();
    dispatch(fetchNewsData(query, types, sort));
  };
  return (
    <div>
      <SearchStyle>
        <SearchInput>
          <InputBase
            placeholder='Search The New York Times'
            inputProps={{ 'aria-label': 'Search The New York Times' }}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </SearchInput>
        <IconStyle>
          <IconButton
            onClick={() => handleSubmit(searchedData)}
            aria-label='search'
          >
            <SearchIcon style={{ color: 'black' }} />
          </IconButton>
        </IconStyle>
      </SearchStyle>
    </div>
  );
};

export { Search };
