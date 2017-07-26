import React from 'react';
import { List, Divider } from 'semantic-ui-react';

const propTypes = {
  orderValue: PT.number
}

class OrderBill extends React.Component {
  constructor(props) {
    super(props);

  }
  render(){
    const {
      orderValue
    } = this.props;
    return(
      <List className='order-bill'>
        <List.Item as='li'><span>ORDER VALUE:</span><span>${orderValue.toFixed(2)}</span></List.Item>
        <List.Item as='li'><span>DELIVERY</span><span>$10.00</span></List.Item>
        <List.Item as='li'><Divider/></List.Item>
        <List.Item as='li'><span>TOTAL</span><span>${(orderValue+10).toFixed(2)}</span></List.Item>
        <List.Item as='li'>30 days withdrawal. </List.Item>
      </List>
    )
  }
}

OrderBill.propTypes = propTypes;

export default OrderBill;