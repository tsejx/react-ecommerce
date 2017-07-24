import React from 'react';
import ProductItem from './ProductItem';

import 'assets/style/product.scss';

const propTypes = {
  dataProducts: PT.arrayOf(PT.object)
}

class ProductList extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    let itemsProduct = this.props.dataProducts.map(function(item){
      return(
        <ProductItem
          key={item.id}
          id={item.id}
          category={item.category}
          type={item.type}
          name={item.name}
          price={item.price}
          images={item.images}
        />
      )
    })

    return(
      <div id='product-list'>
        {itemsProduct}
      </div>
    )
  }
}

export default ProductList;