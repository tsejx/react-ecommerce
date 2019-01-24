import React from 'react';
import { Link } from 'react-router-dom';
import { Popup, Item, Button, Icon } from 'semantic-ui-react';
// import OrderItem from '../cart/OrderItem';
// import OrderBill from '../cart/OrderBill';
import './index.scss';

const PopupCart = (props) => {

    // let {
    //   cart,
    //   btnTool
    // } = props;

    // let valueTotal = 0;

    // const itemsOrder = cart.map(function(item,index){

    //   valueTotal += item.salePrice * item.quantity;

    //   return(
    //     <div></div>
    //     // <OrderItem key={item.id} {...item}/>
    //   )
    // })

    // const conHasPro = (
    //   <div className='popup-cart'>

    //     <Item.Group id='cart-window' divided>
    //       {itemsOrder}
    //     </Item.Group>

    //     {/* <OrderBill orderValue={valueTotal}/> */}

    //     <Link
    //       className='checkout-btn'
    //       to='/cart'
    //     >
    //       CHECKOUT
    //     </Link>
    //   </div>
    // )

    // const conNoPro = (
    //   <div className={'up-cart' + ' ' + 'no-pro'}>Your shopping bag is empty!</div>
    // )

    // const displayPopupCart = !cart.length ? conNoPro:conHasPro;

  return(
    <Popup
    hoverable
    position='bottom center'
    trigger={
      <Button className="menu-hd" animated="fade" floated="right" toggle={false}>
        <Button.Content as="span" hidden>
          Cart
        </Button.Content>
        <Button.Content as="span" visible>
          <Icon name="shop" />
        </Button.Content>
      </Button>
    }>
      <Popup.Content>
      Hello world!
        {/* {displayPopupCart} */}
      </Popup.Content>
    </Popup>
  )
}

export default PopupCart;