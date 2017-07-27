import React, { Component } from 'react';
import { Grid, Header, Form, Button, Checkbox } from 'semantic-ui-react';
import Scroll from '../scroll/Scroll';
import 'assets/style/user.scss';

class RegisterSite extends Component {

  componentDidMount() {
    Scroll(230,300);
  }

  render(){
    return(
      <Grid id='join-container' textAlign='center'>
        <Grid.Column width={4} textAlign='left'>
          <Header as='h3'>
            JOIN US
            <Header.Subheader>
              Enter following details here.
            </Header.Subheader>
          </Header>
          <Form>
            <Form.Field
              label='Email'
              control='input'
              placeholder='Email'
            />
            <Form.Field
              label='Password'
              control='input'
              type='password'
              placeholder='Password'
            />
            <Form.Field
              label='Repeat Password'
              control='input'
              type='password'
              placeholder='Repeat Password'
            />
            <Form.Field
              control={Checkbox}
              label={{ children: 'Yes,I consent to the Privacy policy.' }}
            />
            <Button type='submit' color='black'>JOIN US</Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default RegisterSite;