import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button } from 'semantic-ui-react';

const SubscribeMenu = function(props){
  return(
    <Grid.Column >
      <h4 className='ft-submenu-header'>
        Sign up for newletter
      </h4>
      <p className='ft-subscribe-text'>
        Sign up now and get 15% off one item.
      </p>
      <Link
        to='/register'
        className='ft-subscribe-btn'
      >
        SIGN UP
      </Link>
    </Grid.Column>
  )
}

export default SubscribeMenu;