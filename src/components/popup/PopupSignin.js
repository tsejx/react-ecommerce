import React from 'react';
import { Popup } from 'semantic-ui-react';

import LoginForm from '../user/LoginForm';
import UserInfo from '../user/UserInfo';

import 'assets/style/user.scss';

const propTypes = {
  btnTool: PT.element
}

const SignOut = (props) => (
  retrurn(
    <span className='sign-out'>Sign out</span>
  )
)

class PopupSignin extends React.Component {
  constructor(props) {
    super(props);

  }
  render(){
    let {
      btnTool
    } = this.props;
    return(
      <Popup trigger={btnTool} position='bottom center' hoverable>
        <Popup.Content>
          <LoginForm/>
        </Popup.Content>
      </Popup>
    )
  }
}

PopupSignin.propTypes = propTypes;

export default PopupSignin;