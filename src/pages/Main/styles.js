import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
from  {
  transform: rotate(0deg);
}

to  {
  transform: rotate(360deg);
}
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  > span {
    margin-top: 20px;
    font-size: 20px;
    color: #eee;
  }

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const TitlePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  text-align: center;
  width: 60%;
  border-bottom: 2px solid #eee;
  margin: 0 auto;
  margin-top: 10px;

  > strong {
    font-size: 18px;
    font-weight: bold;
    color: #fff;
  }
  > span {
    margin-top: 10px;
    font-size: 14px;
    font-weight: lighter;
    color: #fff;
  }
`;

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  margin-top: 30px !important;
  margin: 0 auto;
  max-width: 900px;
  min-height: 68%;
  border-radius: 8px;
  justify-content: center;

  > div + div {
    margin-left: 10px;
  }
`;

export const TitleContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Quattrocento:wght@700&display=swap');

  display: flex;
  align-items: center;
  flex-direction: row !important;
  justify-content: space-between;
  border-bottom: 2px solid #ddd;
  height: 50px;
  margin-bottom: 5px;
  padding-right: 15px;
  padding-left: 15px;

  > span {
    font-family: 'Quattrocento', serif;
  }
`;

export const PostContainer = styled.div`
  align-items: center;
  max-width: 350px;
  background-color: #fff;
  border-radius: 8px;
`;

export const ImageContainer = styled.div`
  display: flex;

  img {
    max-width: 350px;
    max-height: 350px;
    height: auto;
  }
`;
export const IconContainer = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;

  > span {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100px;
  }
`;

export const PostText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  max-width: 350px;
  padding: 10px;

  strong {
    padding: 4px;
    color: #000;
    font-size: 14px;
    text-align: left;
  }
  span {
    text-align: left;
    margin-top: 10px;
    font-style: italic;
    max-width: 350px;
  }
  button {
    background-color: transparent;
    border: none;
    margin-left: 12px;
    color: #000;
    font-weight: bold;
  }
`;
