import React from 'react';
import { Header } from 'semantic-ui-react';

// 这里应该用变量代替价格，根据数据是否有价格对比而显示
const ProductHeader = (props) => {
  const {
    name,
    price:{
      salePrice,
      marketPrice
    }
  } = props;

  let clsPrice = '',originValue,actualValue;

  if (!marketPrice) {//原价
    actualValue = '$' + salePrice;
    originValue = null;
    clsPrice = 'common';
  }else{// 折扣价
    actualValue = '$' + salePrice;
    originValue = '$' + marketPrice;
    clsPrice = 'discount';
  }

  return(
    <hgroup>
      <Header as='h2' content={name}/>
      <h3 className="product-price">
        <span className={clsPrice}>{actualValue}</span><span>{originValue}</span>
      </h3>
    </hgroup>
  )
};

export default ProductHeader;