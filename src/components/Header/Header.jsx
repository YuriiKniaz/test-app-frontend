import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/Logo.svg';

const Header = () => {
  return (
    <header>
      <img alt='logo' src={Logo}/>
      <NavLink to='/test-app-frontend'>Roast</NavLink>
    </header>
  );
};

export default Header;
