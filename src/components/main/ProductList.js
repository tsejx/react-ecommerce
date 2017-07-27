import React from 'react';
import ProductItem from './ProductItem';

const propTypes = {
  dataProducts: PT.arrayOf(PT.object)
}

const ProductList = (props) => {

  const itemsProduct = props.dataProducts.map(function(item){
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

ProductList.propTypes = propTypes;

export default ProductList;