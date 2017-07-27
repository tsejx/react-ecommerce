import React from 'react';
import { Link } from 'react-router-dom';
import { Popup, Button, Icon } from 'semantic-ui-react';
import 'assets/style/user.scss';

const propTypes = {
  btnTool: PT.element
}

const PopupLogin = (props) => (
  <Popup
    trigger={props.btnTool}
    position='bottom center'
    hoverable
  >
    <Popup.Content>
      <Button color='black' className='click-to-siginin'>
        <Icon name='child' />
        <Link to='/login'>Click here to sign in.</Link>
      </Button>
    </Popup.Content>
  </Popup>
)

PopupLogin.propTypes = propTypes;

export default PopupLogin;