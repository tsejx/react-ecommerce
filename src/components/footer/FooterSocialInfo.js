import React, { Component } from 'react';
import { Icon, Dimmer } from 'semantic-ui-react';

class FooterSocialInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false }
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleOpen(){
    this.setState({active: true})
  }
  handleClose(){
    this.setState({active: false})
  }
  render(){
    return(
      <div class="social">
        <a href='https://github.com/tsejx'>
          <Icon link name='github' size='big'/>
        </a>
        <a href='http://weibo.com/mrsingsing'>
          <Icon link name='weibo' size='big'/>
        </a>
        <a onClick={this.handleOpen}>
          <Icon link name='weixin' size='big'/>
        </a>
        <Dimmer
          active={this.state.active}
          onClickOutside={this.handleClose}
          page
        >
          <img src="../../src/assets/img/qrcode.jpg" style={{width: 300,height:300}}/>
        </Dimmer>
      </div>
    )
  }
}

export default FooterSocialInfo;