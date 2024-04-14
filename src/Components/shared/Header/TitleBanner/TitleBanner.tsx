import AppBar from '@mui/material//AppBar';
import IconButton from '@mui/material/IconButton';
import Logo from '../../../../assets/images/title.png';
import MediaQuery from 'react-responsive';
import { NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import SliderMenu from '../../SliderMenu/SliderMenu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router';

const NavBar = styled('div')({
  '& .MuiPaper-root': {
    backgroundColor: '#fff',
    color: 'black',
    padding: '0 8%',
    flexGrow: 1,
  },
});

const TitleBar = styled('div')(({ theme }) => ({
  flexGrow: 1,
  textAlign: 'center',
  alignItems: 'center',
  marginLeft: theme.spacing(1),
  justifyContent: 'center',
  cursor: 'pointer',
}));

const MenuBar = styled('div')`
  position: 'relative';
  margin-right: 45px;

  @media (max-width: 1000px) {
    margin-right: 15px;
  }
`;

export default function TitleBanner() {
  const navigate = useNavigate();
  const returnHome = () => navigate('/Home');

  return (
    <div data-testid='title-name'>
      <NavBar>
        <AppBar>
          <Toolbar>
            <MenuBar>
              <SliderMenu />
            </MenuBar>
            <MediaQuery minWidth={1224}>
              <NavLink to='/Search'>
                <IconButton size='large' aria-label='search' color='inherit'>
                  <SearchIcon data-testid='search-link' />
                </IconButton>
              </NavLink>
            </MediaQuery>
            <TitleBar>
              <Typography>
                <img
                  data-testid='title-logo'
                  style={{ margin: 'auto' }}
                  src={Logo}
                  alt='title-logo'
                  width='250px'
                  onClick={returnHome}
                />
              </Typography>
            </TitleBar>
          </Toolbar>
        </AppBar>
      </NavBar>
    </div>
  );
}
