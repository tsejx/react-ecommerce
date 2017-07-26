import React from 'react';
import { Header, Button, Icon } from 'semantic-ui-react';

class ProductCount extends React.Component {
  constructor(props) {
    super(props);

  }
  render(){
    return(
      <div class="product-count">
        <Header as='h4'>Count:{" "}<span>Select Count</span></Header>
      </div>
    )
  }
}

export default ProductCount;