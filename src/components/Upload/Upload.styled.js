import styled from 'styled-components';
import back from '../../images/MainBackground.webp';


export const UploadDiv = styled.div`
  @media screen and (max-width: 384px) {
    background-image: url(${back});
    background-position: center;
    background-size: cover;
    max-width: 383px;
    height: 100%;
    padding: 77px 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      color: #fff;
      font-weight: 600;
      font-size: 40px;
      padding: 0;
      margin: 0 0 75px 0;
      text-align: center;
    }
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
  margin-bottom: 75px;
`;

export const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 42px;
  background: rgb(101, 98, 226);
  background: linear-gradient(
    140deg,
    rgba(101, 98, 226, 1) 0%,
    rgba(0, 171, 229, 1) 100%
  );
  padding: 33px 19px 49px 19px;

  text-align: center;

  p {
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    margin: 0;
    padding: 0;
    margin-bottom: 32px;

    span {
      background-color: #0085b2;
      padding: 0 8px;
      border-radius: 10px;
      text-align: center;

      margin: 0;
    }
  }
  button {
    background: rgb(112, 109, 251);
    background: linear-gradient(
      90deg,
      rgba(112, 109, 251, 1) 0%,
      rgba(3, 255, 209, 1) 100%
    );
    border: none;
    border-radius: 30px;
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    padding: 24px 85px;
    margin-bottom: 30px;
    box-shadow: 5px 10px 15px -5px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;

export const InputWrapper = styled.div`
  width: 346px;
  height: 229px;
  border-radius: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #27324d;
  box-shadow: inset 20px 20px 30px -5px rgba(34, 35, 67, 1);
  margin-bottom: 32px;
  position: relative;

  input[type='file'] {
    display: none;
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }

  img {
    width: 75px;
    height: 100px;
  }
`;