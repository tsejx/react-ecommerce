import React from 'react';
import { Link } from 'react-router-dom';
import { Popup, Button, Icon } from 'semantic-ui-react';
import './index.scss';

const LoginMenu = props => (
  <Popup
    hoverable
    position="bottom center"
    trigger={
      <Button className="menu-hd" animated="fade" floated="right" toggle={false}>
        <Button.Content as="span" hidden>
          Login
        </Button.Content>
        <Button.Content as="span" visible>
          <Icon name="user" />
        </Button.Content>
      </Button>
    }
  >
    <Popup.Content>
      <Button color="black" className="sign-in-btn">
        <Icon name="child" />
        <Link to="/login">Click here to sign in.</Link>
      </Button>
    </Popup.Content>
  </Popup>
);

export default LoginMenu;
