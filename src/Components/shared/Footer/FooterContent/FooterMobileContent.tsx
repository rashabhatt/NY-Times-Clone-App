import { Box } from '../FooterStyle';
import Footer from '../FooterIndex';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';

const category = ['Home', 'Trendings', 'Search'];

export function FooterMobileViewComponent() {
  return (
    <div>
      <Box>
        <Footer style={{ paddingTop: '20px' }}>
          <Footer.Wrapper>
            <div
              style={{
                borderTop: '3px solid #ddd',
                padding: '1px',
                borderBottom: '1px solid #ddd',
              }}
            ></div>
            <Footer.Row>
              <Footer.Column>
                <img
                  src='https://www.vectorlogo.zone/logos/nytimes/nytimes-wordmark.svg'
                  alt="new york times's logo'"
                />
              </Footer.Column>
            </Footer.Row>
            <List>
              {category.map((text) => (
                <ListItem
                  key={text}
                  style={{
                    borderTop: '1px solid #ddd',
                  }}
                >
                  <NavLink
                    style={{ textDecoration: 'none', color: 'black' }}
                    to={`/${text.toLowerCase().replace(/[^\w\s]/gi, '')}`}
                  >
                    {' '}
                    <ListItemText primary={text} />
                  </NavLink>
                </ListItem>
              ))}
            </List>
            <Footer.FooterBottom>
              <ul
                style={{
                  textAlign: 'center',
                  margin: '0 10px 5px 10px',
                }}
              >
                <li>
                  <span>&copy; 2021 The New York TIme Company</span>
                </li>
              </ul>
              <ul
                style={{
                  borderTop: '1px solid #ddd',
                  textAlign: 'center',
                  margin: '0 10px 5px 10px',
                }}
              >
                <li>
                  <span>NYTCo</span>
                  <span>Contact Us</span>
                  <span>Accessibilty</span>
                  <span>Work with us</span>
                  <span>Advertisers</span>
                  <span>T Brand Studio</span>
                  <span>Your Ad Choices</span>
                  <span> Privacy Policy</span>
                  <span>Terms of Services</span>
                  <span>Terms of sales</span>
                  <span>Site map</span>
                  <span>Help</span>
                  <span>Subscription</span>
                </li>
              </ul>
            </Footer.FooterBottom>
          </Footer.Wrapper>
        </Footer>{' '}
      </Box>
    </div>
  );
}
