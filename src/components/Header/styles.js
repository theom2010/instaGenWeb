import styled from 'styled-components';

export const Container = styled.div`
  background: #000;
  padding: 0px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      padding-right: 40px;
    }

    a {
      font-weight: bold;
      margin-right: 15px;
      color: rgb(255, 58, 192);
    }
  }

  h4 {
    margin-right: 10px;
    font-weight: lighter;
    font-size: 14px;
    color: rgb(255, 58, 192);
  }
`;
