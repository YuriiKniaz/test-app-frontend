import styled from 'styled-components';
import back from '../../images/LoadingBackground.webp';

export const LoadingBack = styled.div`
  @media screen and (max-width: 384px) {
    background-image: url(${back});
    background-position: center;
    background-size: cover;
    max-width: 383px;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .heart {
    transform: rotate(-13deg);
    display: block;
    margin: 0 auto;
  }

  h1 {
    color: #fff;
    font-weight: 600;
    font-size: 40px;
    padding: 0;

    text-align: center;
  }
`;
export const LogoWrap = styled.div`
margin-top: 80px;
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
  margin-bottom: 88px;
`;
