import React, { Component } from 'react';
import { Menu, Button, Icon } from 'semantic-ui-react';
import LoginMenu from './LoginMenu';
import CartMenu from './CartMenu';

class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Menu secondary className="menu-bar">
        <Menu.Item as="li">
          <LoginMenu />
        </Menu.Item>
        <Menu.Item as="li">
          <Button className="menu-hd" animated="fade" floated="right" toggle={false}>
            <Button.Content as="span" hidden>
              Favorite
            </Button.Content>
            <Button.Content as="span" visible>
              <Icon name="heart" />
            </Button.Content>
          </Button>
        </Menu.Item>
        <Menu.Item as="li">
          <Button className="menu-hd" animated="fade" floated="right" toggle={false}>
            <Button.Content as="span" hidden>
              Message
            </Button.Content>
            <Button.Content as="span" visible>
              <Icon name="mail" />
            </Button.Content>
          </Button>
        </Menu.Item>
        <Menu.Item as="li">
          <CartMenu />
        </Menu.Item>
      </Menu>
    );
  }
}

export default MenuBar;
