import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MediaQuery from 'react-responsive';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { styled } from '@mui/material/styles';

const FullList = styled('div')({
  width: '250px',
});

const MenuStyle = styled('div')({
  fontSize: '10px',
  fontWeight: 'bolder',
  padding: '2px 40px',
});

export default function SliderMenu() {
  const [state, setState] = React.useState({
    left: false,
  });
  const category = ['Home', 'Trendings', 'Search'];
  const category1 = [
    'World',
    'U.S.',
    'Politics',
    'N.Y.',
    'Business',
    'Opinion',
    'Tech',
    'Science',
    'Health',
    'Sports',
  ];
  const category2 = [
    'Arts',
    'Books',
    'Style',
    'Food',
    'Travel',
    'Magazine',
    'T Magzine',
    'Real Estate',
    'Video',
    'The Upshot',
  ];
  const toggleDrawer = (anchor: any, open: any) => () => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: any) => (
    <div onClick={toggleDrawer(anchor, false)}>
      <FullList>
        <MenuStyle>
          <MediaQuery maxWidth={768}>
            <NavLink to='/Search'>
              <IconButton size='medium' aria-label='search' color='inherit'>
                <SearchIcon data-testid='search-link' /> Search
              </IconButton>
            </NavLink>
            <Divider />
          </MediaQuery>
        </MenuStyle>
        <List>
          {category.map((text) => (
            <ListItem button key={text}>
              <MenuStyle>
                <NavLink
                  style={{ textDecoration: 'none', color: 'black' }}
                  to={`/${text.toLowerCase().replace(/[^\w\s]/gi, '')}`}
                >
                  {' '}
                  <ListItemText primary={text} />
                </NavLink>
              </MenuStyle>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {category1.map((text) => (
            <ListItem button key={text}>
              <MenuStyle>
                <NavLink
                  style={{ textDecoration: 'none', color: 'black' }}
                  to={`/Home/${text.toLowerCase().replace(/[^\w\s]/gi, '')}`}
                >
                  {' '}
                  <ListItemText primary={text} />
                </NavLink>
              </MenuStyle>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {category2.map((text) => (
            <ListItem button key={text}>
              <MenuStyle>
                <ListItemText primary={text} />
              </MenuStyle>
            </ListItem>
          ))}
        </List>
      </FullList>
    </div>
  );
  return (
    <div>
      <React.Fragment key='left'>
        <MenuIcon onClick={toggleDrawer('left', true)} />
        <SwipeableDrawer
          anchor={'left'}
          open={state['left']}
          onClose={toggleDrawer('left', false)}
          onOpen={toggleDrawer('left', true)}
        >
          {list('left')}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
