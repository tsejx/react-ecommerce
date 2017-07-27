import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

import LoginForm from '../user/LoginForm';
import NewCustomer from '../user/NewCustomer';
import OrderBar from './OrderBar';

const SigninStep = (props) => (
  <Grid.Row id='checkout'>
    <Grid.Column id='checkout-controller' width='8' textAlign='left'>
      <Header as='h2' className='controller-header' content='SIGN IN' dividing/>
      <Grid className='control-wrap'>
        <LoginForm isLogin={props.isLogin} handleLogin={props.handleLogin}/>
        <NewCustomer/>
      </Grid>
    </Grid.Column>
    <OrderBar cart={props.cart}/>
  </Grid.Row>
);

export default SigninStep;