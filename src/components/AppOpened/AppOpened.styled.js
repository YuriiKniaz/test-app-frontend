import styled from 'styled-components';
import back from '../../images/UploadedBackground.webp';

export const Main = styled.div`
  @media screen and (max-width: 384px) {
    background-image: url(${back});
    background-position: center;
    background-size: cover;
    max-width: 383px;
    height: 100%;
    padding: 77px 29px 71px 29px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      color: #fff;
      font-size: 40px;
      text-align: center;
      margin: 38px 0 0 0;
      font-weight: 600;
    }
  }
`;

export const AppOpenedWrap = styled.div`

  max-width: 335px;
  margin-top: 35px;
  padding: 19px 18px 24px 5px;
  background-color: rgb(255, 255, 255, 15%);
  border-radius: 24px;
  border-width: 2px;
  border-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
`;
export const Days = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 52px;
  max-width: 272px;

  color: #fff;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  p {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    text-align: center;
  }
`;

export const Month = styled.div`
  height: 472px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  color: #fff;
  font-size: 18px;
  font-weight: 600;

  p {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
  }
`;

export const LogoWrap = styled.div`
  display: flex;
  gap: 12px;
  justify-content: baseline;
  align-items: center;
  margin: 0 auto;
  a {
    text-decoration: none;
    color: #fff;
    font-size: 30px;
  }
`;

export const Wrapper = styled.div`
  max-width: 272px;
  display: flex;
  flex-direction: row;
  
  column-gap: 8px;
`;

export const Blocks = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 3px;
  margin-bottom: 8px;
`;

export const MoreLessWrap = styled.div`
  max-width: 335px;
  padding: 18px 32px;
  margin-top: 21px;
  border-radius: 82px;
  display: flex;
  gap: 38px;
  background-color: rgb(255, 255, 255, 15%);

  p {
    padding: 0;
    margin: 0;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    text-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
  }

  .blockWrapper {
    display: flex;
    justify-content: center;
    gap: 12px;
  }

  .block {
    width: 18px;
    height: 18px;
    border-radius: 3px;
    box-shadow: 5px 10px 15px -5px rgba(0, 0, 0, 0.75);
  }
`;
