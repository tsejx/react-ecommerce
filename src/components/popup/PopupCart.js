import React from 'react';
import { Link } from 'react-router-dom';
import { Popup, Item } from 'semantic-ui-react';
import OrderItem from '../cart/OrderItem';
import OrderBill from '../cart/OrderBill';
import 'assets/style/cart.scss';

const propTypes = {
  btnTool: PT.element
}

const PopupCart = (props) => {
    let {
      cart,
      btnTool
    } = props;

    let valueTotal = 0;

    const itemsOrder = cart.map(function(item,index){

      valueTotal += item.salePrice * item.quantity;

      return(
        <OrderItem key={item.id} {...item}/>
      )
    })

    const conHasPro = (
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
    )

    const conNoPro = (
      <div className={'up-cart' + ' ' + 'no-pro'}>Your shopping bag is empty!</div>
    )

    const displayPopupCart = !cart.length ? conNoPro:conHasPro;

  return(
    <Popup trigger={btnTool} position='bottom center' hoverable>
      <Popup.Content>
        {displayPopupCart}
      </Popup.Content>
    </Popup>
  )
}

PopupCart.propTypes = propTypes;

export default PopupCart;