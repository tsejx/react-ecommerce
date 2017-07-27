import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import Scroll from '../scroll/Scroll';

class TopBtn extends Component {
  constructor(props) {
    super(props);
    this.handleBackToTop = this.handleBackToTop.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll',this.handleFixedMenu);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleFixedMenu);
  }
  handleBackToTop(){
    Scroll(0,300);
  }
  render(){
    return(
      <Button
        id='tb-btn'
        icon='chevron up'
        size='large'
        color='black'
        ref='tbBtn'
        onClick={this.handleBackToTop}
       />
    )
  }
}

export default TopBtn;