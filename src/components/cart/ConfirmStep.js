import React from 'react';
import { Grid, Header, Button } from 'semantic-ui-react';

import ConfirmOrder from './ConfirmOrder';
import OrderBar from './OrderBar';

const propTypes = {
  handleBillDone: PT.func
}

const ConfirmStep = (props) => (
  <Grid.Row id='checkout'>
    <Grid.Column id='checkout-controller' width='8' textAlign='left'>
      <Header as='h2' className='controller-header' content='CONFIRM ORDER' dividing/>
      <ConfirmOrder/>
      <Button
        className='confrim-btn'
        color='black'
        content='COMPLETE PURCHASE'
        onClick={()=>props.handleBillDone()}
      />
    </Grid.Column>
    <OrderBar cart={props.cart}/>
  </Grid.Row>
)

ConfirmStep.propTypes = propTypes;

export default ConfirmStep;