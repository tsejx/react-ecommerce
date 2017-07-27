import React from 'react';
import { Form, Header, Button, Dimmer, Popup } from 'semantic-ui-react';
import axios from 'axios';
import 'assets/style/user.scss';

const propTypes = {
  handleLogin: PT.func,
  isLogin: PT.bool
}

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      email:'',
      password:''
    }
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.changeMail = this.changeMail.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }
  handleOpen(){
    this.setState({active: true})
  }
  handleClose(){
    this.setState({active: false})
  }
  changeMail(e){
    this.setState({email: e.target.value});
  }
  changePassword(e){
    this.setState({password: e.target.value});
  }
  render() {
    let {
      active,
      email,
      password
    } = this.state;

    let {
      changeMail,
      changePassword
    } = this;

    let {
      isLogin,
      handleLogin
    } = this.props;

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
            placeholder='Email'
            onChange={changeMail}
          />
          <Form.Field
            label='*Password'
            control='input'
            type='password'
            placeholder='Password'
            onChange={changePassword}
          />
          <Popup
            trigger={<Button
                        type='submit'
                        color='black'
                        onClick={()=>{handleLogin(email,password)}
                      }>LOGIN</Button>}
            content={isLogin?'You have successfully logged in.':'Your e-mail and password are wrong , please check again.'}
            on='click'
            hideOnScroll
            inverted
          />
          <a onClick={this.handleOpen}>
            Forgotten password?
          </a>
        </Form>
        <Dimmer
          active={active}
          onClickOutside={this.handleClose}
          page
        >
        Email : guest
        <br/>
        Password : 01234
        </Dimmer>
      </div>
    )
  }
}

export default LoginForm;