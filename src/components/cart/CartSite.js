import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import StepProgress from './StepProgress';
import SigninStep from './SigninStep';
import ConfirmStep from './ConfirmStep';
import BillDoneStep from './BillDoneStep';
import Scroll from '../scroll/Scroll';

import 'assets/style/cart.scss';
import 'assets/style/user.scss';

const propTypes = {
  isLogin: PT.bool,
  cart: PT.arrayOf(PT.object),
  handleLogin: PT.func
}

class CartSite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isConfirm: false
    }
    this.handleBillDone = this.handleBillDone.bind(this);
  }
  componentDidMount() {
    Scroll(290,300);
  }
  handleBillDone(){
    this.setState({isConfirm: true})
  }
  render(){
    const {
      handleBillDone
    } = this;

    const {
      isConfirm
    } = this.state;

    const {
      cart,
      isLogin,
      handleLogin
    } = this.props;

    let steps = [
      { completed: isLogin, active: !isLogin, title: 'SIGNIN', icon: 'id card outline'},
      { completed: isConfirm, active: isLogin && !isConfirm, title: 'CONFIRM ORDER', icon: 'idea'},
      { completed: isConfirm, active: false, title: 'THANK YOU', icon:'truck'}
    ];

    let displayContainer = null;

    if(!isLogin){
      displayContainer = <SigninStep cart={cart} isLogin={isLogin} handleLogin={handleLogin}/>;
    }else if(!isConfirm){
      displayContainer = <ConfirmStep cart={cart} handleBillDone={handleBillDone}/>;
    }else{
      displayContainer = <Route component={BillDoneStep}/>;
    }

    return (
      <Grid textAlign='center'>
        <StepProgress steps={steps}/>
        {displayContainer}
      </Grid>
    )
  }
}

CartSite.propTypes = propTypes;

export default CartSite;