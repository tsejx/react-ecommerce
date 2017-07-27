import React from 'react';
import { Grid, Header, Item } from 'semantic-ui-react';

import OrderItem from './OrderItem';
import OrderBill from './OrderBill';

const OrderBar = (props) => {
  const {
    cart
  } = props;

  let valueTotal = 0;

  const itemsOrder = cart.map(function(item,index){
    valueTotal += item.quantity * item.salePrice;
    return(
      <OrderItem key={item.id} {...item}/>
    )
  });

  return(
    <Grid.Column id='order-bar' as='aside' width='4' textAlign='left'>
      <Header as='h2' className='order-header' content='YOUR ORDER' dividing/>
      <Item.Group divided>
        {itemsOrder}
      </Item.Group>
      <OrderBill orderValue={valueTotal}/>
    </Grid.Column>
  )
}

export default OrderBar;