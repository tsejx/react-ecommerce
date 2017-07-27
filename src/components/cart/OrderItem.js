import React from 'react';
import { Item } from 'semantic-ui-react';

const propTypes = {
  id: PT.number,
  name: PT.string,
  marketPrice: PT.number,
  salePrice: PT.number,
  srcImg: PT.string,
  color: PT.string,
  size: PT.string,
  quantity: PT.number
}

const OrderItem = (props) => {
  const {
    name,
    salePrice,
    srcImg,
    color,
    size,
    quantity
  } = props;

  return(
    <Item>
      <Item.Image src={srcImg} />
      <Item.Content className='item-content'>
        <Item.Header as='h3'>{name}</Item.Header>
        <Item.Header as='h4'>${salePrice}</Item.Header>
        <Item.Meta>
          <span>Quantity: {quantity}</span>
          <span>Color: {color}</span>
          <span>Size: {size}</span>
          <span>Total: ${quantity*salePrice}</span>
        </Item.Meta>
      </Item.Content>
    </Item>
  )
}

OrderItem.propTypes = propTypes;

export default OrderItem;