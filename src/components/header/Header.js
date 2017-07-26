import React from 'react';
import { Route } from 'react-router-dom';
import HeaderToolWrapper from './HeaderToolWrapper';
import HeaderBrand from './Brand';
import HeaderNavigation from '../nav/HeaderMenu.js';
import HeaderDivider from './HeaderDivider';

const Header = (props) => {
  let {
    location: {
      pathname
    },
    cart
  } = props;
  return(
    <header>
      <HeaderToolWrapper cart={cart}/>
      <HeaderBrand/>
      <Route component={HeaderNavigation}/>
      {pathname !== '/'? <Route component={HeaderDivider}/> : '' }
    </header>
  )
}

export default Header;