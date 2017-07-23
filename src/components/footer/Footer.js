import React from 'react';
import { Link } from 'react-router-dom';
import { Divider, Icon, Dimmer } from 'semantic-ui-react';

import 'assets/style/footer.scss';

import FootMenu from './FooterMenu';

const Copyright = () => (
  <div class="copyright">
    <p>
      COPYRIGHT © TSEJX 2017.
      <br/>
      ALL RIGHTS RESERVED.
    </p>
  </div>
)

class Social extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
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
    const { active } = this.state;
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
          active={active}
          onClickOutside={this.handleClose}
          page
        >
          <img src="../../src/assets/img/qrcode.jpg" style={{width: 300,height:300}}/>
        </Dimmer>
      </div>

    )
  }
}

class Footer extends React.Component {
  constructor(props) {
    super(props);

  }
  render(){
    return(
      <footer id='footer'>
        <FootMenu/>
        <Divider section/>
        <Social/>
        <Copyright/>
      </footer>
    )

  }
}

export default Footer;