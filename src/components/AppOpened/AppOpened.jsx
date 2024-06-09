import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/Logo.svg';
import {
  Wrapper,
  Blocks,
  Main,
  LogoWrap,
  AppOpenedWrap,
  Days,
  Month,
  MoreLessWrap
} from './AppOpened.styled';

const AppOpened = () => {
  const location = useLocation();
  const { file } = location.state || { file: null };

  return (
    <Main>
      <LogoWrap>
        <img alt="logo" src={Logo} width="28px" height="31px" />
        <NavLink to="/test-app-frontend">Roast</NavLink>
      </LogoWrap>
      <h1>App Opened</h1>
      <AppOpenedWrap>
        <Days>
          <p>S</p>
          <p>M</p>
          <p>T</p>
          <p>W</p>
          <p>T</p>
          <p>F</p>
          <p>S</p>
        </Days>
        <Wrapper>
          <Month>
            <p>Jan</p>
            <p>Feb</p>
            <p>Mar</p>
            <p>Apr</p>
            <p>May</p>
            <p>Jun</p>
            <p>Jul</p>
            <p>Aug</p>
            <p>Sep</p>
            <p>Oct</p>
            <p>Nov</p>
            <p>Dec</p>
          </Month>
          {Object.keys(file).map(day => (
            <div key={day}>
              <div>
                {Object.keys(file[day]).map(month => (
                  <div key={month}>
                    {month !== '_id' && (
                      <Blocks
                        style={{
                          backgroundColor:
                            file[day][month] > 40
                              ? '#03FFD1'
                              : file[day][month] > 20
                              ? '#17C8B0'
                              : file[day][month] > 10
                              ? '#24A399'
                              : '#386C78',
                        }}
                      ></Blocks>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Wrapper>
        
      </AppOpenedWrap>
      <MoreLessWrap>
          <p>More</p>
          <div className='blockWrapper'>
          <div className='block' style={{backgroundColor:'#03FFD1'}}></div>
          <div className='block' style={{backgroundColor:'#17C8B0'}}></div>
          <div className='block' style={{backgroundColor:'#24A399'}}></div>
          <div className='block' style={{backgroundColor:'#386C78'}}></div>
          </div>
          <p>Less</p>
        </MoreLessWrap>
    </Main>
  );
};

export default AppOpened;
