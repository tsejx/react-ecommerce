import React from 'react';
import { Image as ImageComponent, Item, Button } from 'semantic-ui-react'

import 'assets/style/user.scss';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);

  }
  render(){
    return(
      <Item>
        <Item.Image size='small' src='src/assets/img/avatar.png' />
        <Item.Content calssName='user-info'>
          <Item.Header>
            Hello, JehoshaphatTse!
          </Item.Header>
          <Item.Meta>

          </Item.Meta>
        </Item.Content>
      </Item>
    )
  }
}

export default UserInfo;