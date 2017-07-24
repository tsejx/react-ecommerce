import React from 'react';
import { Link } from 'react-router-dom';
import { Popup, Button, Segment, Item } from 'semantic-ui-react';

import 'assets/style/cart.scss';

import OrderItem from '../cart/OrderItem';
import OrderBill from '../cart/OrderBill';

const propTypes = {
  btnTool: PT.element
}

const dataOrder = [
  {
    id: 1499979633003,
    name: 'Short sleeved cooton shirt',
    marketPrice: 300,
    salePrice: 300,
    images: {
      imgProduct: 'http://localhost:8080/src/data/productImages/men/shirts.jpg',
      imgModel: ''
    },
    color: 'blue',
    size: 'S',
    quantity: 5
  },
  {
    id: 1499970633103,
    name: 'Short sleeved cooton shirt',
    marketPrice: 1000,
    salePrice: 100,
    images: {
      imgProduct: 'http://localhost:8080/src/data/productImages/men/shirts.jpg',
      imgModel: ''
    },
    color: 'red',
    size: 'XL',
    quantity: 1
  },
  {
    id: 1499979933003,
    name: 'Short sleeved cooton shirt',
    marketPrice: 300,
    salePrice: 300,
    images: {
      imgProduct: 'http://localhost:8080/src/data/productImages/men/shirts.jpg',
      imgModel: ''
    },
    color: 'blue',
    size: 'S',
    quantity: 5
  }
];

const PopupCart = (props) => {
    let {
      btnTool
    } = props;

    let valueTotal = 0;

    const itemsOrder = dataOrder.map(function(item,index){

      valueTotal += item.salePrice * item.quantity;

      return(
        <OrderItem key={item.id} {...item}/>
      )
    })

  return(
    <Popup trigger={btnTool} position='bottom center' hoverable>
      <Popup.Content>
        <div className='popup-cart'>

          <Item.Group id='cart-window' divided>
            {itemsOrder}
          </Item.Group>

          <OrderBill orderValue={valueTotal}/>

          <Link
            className='checkout-btn'
            to='/cart'
          >
            CHECKOUT
          </Link>
        </div>
      </Popup.Content>
    </Popup>
  )
}

PopupCart.propTypes = propTypes;

export default PopupCart;