import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const Box = styled.div`
  padding: 50px 60px;
  bottom: 0;
  width: 100%;

  @media (max-width: 1000px) {
    display: block;
    padding: 5px 2px;
  }
`;
export const Container = styled.div`
  padding: 0px 46px 9px 46px;
  margin: 0px 114px 0px 114px;
  background: #ffff;

  @media (max-width: 1000px) {
    padding: 0px 2px 9px 2px;
    margin: 0px 4px 0px 4px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // max-width: 1200px;
  width: 95%;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 10px;
  width: 200px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
`;

export const Links = styled(Link)`
  color: #333333;
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
    display: flex;
  }
`;

export const Link2 = styled.a`
  color: black;
  font-size: 14px;
  line-height: 16px;
  margin: -100px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    display: flex;
  }
`;

export const Title = styled.p`
  font-size: 13px;
  color: black;
  margin-bottom: 15px;
  text-transform: uppercase;
  line-height: 15px;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;
  color: #333333;
`;

export const ImgRow = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px;
`;

export const List = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0px;
  li {
    display: flex;
    justify-items: start;
    align-items: flex-start;
    font-size: 13px;
    padding: 5px;
  }
`;
export const FooterBottom = styled.div`
  border-top: 1px solid #ddd;
  margin-top: 10px;
  padding: 0px;
  dispaly: flex;
  justify-content: space-between;
  justify-content: space-between;
  padding: 5px;
  span {
    color: #666666;
    font-size: 11px;
    line-height: 11px;
    flex-basis: 1;
    margin: 8px;
  }
  @media (max-width: 1000px) {
    margin-top: 2px;
    padding: 2px 2px;
    span {
      color: #666666;
      font-size: 11px;
    }
  }
`;
