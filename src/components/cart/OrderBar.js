import React from 'react';
import { Grid, Header, Item, } from 'semantic-ui-react';

import 'assets/style/cart.scss';

import OrderItem from './OrderItem';
import OrderBill from './OrderBill';

const dataOrder = [
  {
    id: 1499979633003,
    name: 'Short sleeved cooton shirt',
    marketPrice: 300,
    salePrice: 300,
    images: {
      imgProduct: 'src/assets/img/product/men/short-sleeved-cooton-shirt.jpg',
      imgModel: ''
    },
    color: 'blue',
    size: 'S',
    quantity: 5
  },
  {
    id: 1499970633123,
    name: 'Short sleeved cooton shirt',
    marketPrice: 1000,
    salePrice: 100,
    images: {
      imgProduct: 'src/assets/img/product/men/short-sleeved-cooton-shirt.jpg',
      imgModel: ''
    },
    color: 'red',
    size: 'XL',
    quantity: 1
  }
];


class OrderBar extends React.Component {
  constructor(props) {
    super(props);

  }
  render(){

    let {
      cart
    } = this.props;

    let valueTotal = 0;

    const itemsOrder = cart.map(function(item,index){

      valueTotal += item.quantity * item.salePrice;

      return(
        <OrderItem key={item.id} {...item}/>
      )
    });
    return(
      <Grid.Column id='order-bar' as='aside' width='4' textAlign='left'>

        <Header as='h2' content='YOUR ORDER' dividing/>

        <Item.Group divided>
          {itemsOrder}
        </Item.Group>

        <OrderBill orderValue={valueTotal}/>

      </Grid.Column>
    )
  }
}

export default OrderBar;