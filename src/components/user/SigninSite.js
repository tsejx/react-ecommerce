import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Form, Header, Button } from 'semantic-ui-react';

import 'assets/style/user.scss';

import LoginForm from './LoginForm';
import NewCustomer from'./NewCustomer';

import Scroll from '../scroll/Scroll';

class SignSite extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    Scroll(230,300);
  }
  render(){
    return(
      <Grid id='signin' textAlign='center'>
        <Grid.Column width={4} textAlign='left'>
          <LoginForm/>
        </Grid.Column>
        <Grid.Column width={4} textAlign='left'>
          <NewCustomer/>
        </Grid.Column>
      </Grid>
    )
  }
}

export default SignSite;