import React from 'react'
import { LoadingBack,LogoWrap } from './Loading.styled'
import { NavLink } from 'react-router-dom';
import Logo from '../../images/Logo.svg';
import Heart from '../../images/HeartLogo.svg'


const Loading = () => {
  return (
    <LoadingBack>
      <LogoWrap>
    <img alt='logo' src={Logo}/>
      <NavLink to='/test-app-frontend'>Roast</NavLink>
      </LogoWrap>
      <img className='heart' src={Heart} alt="heart" width='243px' height='320px'/>
      <h1>Uploading your data..</h1>
    </LoadingBack>
  
  )
}

export default Loading