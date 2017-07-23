import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Header, Button } from 'semantic-ui-react';

import 'assets/style/user.scss';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return(
      <div className='login-form'>
        <Header as='h4'>
          SIGN IN
          <Header.Subheader>
            Sign in to be continue.
          </Header.Subheader>
        </Header>
        <Form>
          <Form.Field
            label='*Email'
            control='input'
            placeholder='Email'/>
          <Form.Field
            label='*Password'
            control='input'
            type='password'
            placeholder='Password'/>
          <Button
            type='submit'
            color='black'>
            SIGN IN
          </Button>
          <Link to='/'>Forgotten password?</Link>
        </Form>
      </div>
    )
  }
}

export default LoginForm;