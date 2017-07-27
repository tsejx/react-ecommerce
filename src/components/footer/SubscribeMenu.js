import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

const SubscribeMenu = () => (
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

export default SubscribeMenu;