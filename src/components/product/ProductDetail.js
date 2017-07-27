import React from 'react';
import { Button, Icon, Tab, Popup } from 'semantic-ui-react';

const propTypes = {
  dataDes: PT.string,
  proInfo: PT.object,
  canAddToCart: PT.bool,
  hasSelected: PT.bool,
  handleAddOnceToCart: PT.func
}

const Delivery = (props) => (
  <Tab.Pane>
    Delivery: Shipping is available to residential address or other address in Mainland China, in accordance with your selected delivery option. Unfortunately we are unable to deliver to Hong Kong, Macau or Taiwan. Payment: We accept card payments via MasterCard and Visa. You can also select to pay by Alipay, Bank transfer, China Union Pay via Online or Telephone or H&M giftcard.
  </Tab.Pane>
)

const ProductDeatail = (props) => {
  const panes = [
    { menuItem: 'DESCRIPTION', render: () => <Tab.Pane>{props.dataDes}</Tab.Pane> },
    { menuItem: 'DETAILS', render: () => <Tab.Pane>NO DETAIL</Tab.Pane> },
    { menuItem: 'SHARE', render: () => <Tab.Pane>NO SHARE</Tab.Pane> },
    { menuItem: 'DELIVERY', render: () => <Delivery/> },
  ];

  let {
    proInfo,
    hasSelected,
    canAddToCart,
    handleAddToCart,
    handleAddOnceToCart
  } = props;

  const btnAddToCart = (
    <Button as='button' disabled={!canAddToCart} className='add-to-cart' icon onClick={()=>{
      if (!hasSelected || !canAddToCart) return;
      handleAddToCart(proInfo);
      handleAddOnceToCart();
    }}>
      <Icon name='shopping bag' />
      ADD TO SHOPPING CART
    </Button>
  )

  return(
    <div className="product-detail">
      <span className='delivers'>Delivers in: <strong>1-7 working days</strong></span>
      <Popup
        trigger={btnAddToCart}
        content={hasSelected?'Successfully added to the shopping cart , but regretly to tell you that you just can buy this product once.':'Color and size must be selected.'}
        on='click'
        hideOnScroll
        inverted
      />
      <Button as='button' className='save-as-favourite' icon>
        <Icon name='empty heart'/>
        SAVE AS FAVOURITE
      </Button>
      <Tab menu={{ attached: 'top' }} panes={panes} />
    </div>
  )
}

ProductDeatail.propTypes = propTypes;

export default ProductDeatail;