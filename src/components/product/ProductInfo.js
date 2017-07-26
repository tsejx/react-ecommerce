import React from 'react';
import { Grid, Image, Segment, Header, Statistic, Button } from 'semantic-ui-react';

import axios from 'axios';

import ProductColor from './ProductColor';
import ProductSize from './ProductSize';
import ProductCount from './ProductCount';
import ProductDetail from './ProductDetail';


// 左侧大图
const ProductImages = (props) => (
  <div class="product-image-container">
    <Image src={props.img} fluid />
  </div>
);

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
    <div>
      <Header as='h2' content={name}/>
      <div className="product-price">
        <span className={clsPrice}>{actualValue}</span><span>{originValue}</span>
      </div>
    </div>
  )

};

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: 'Please Select Color',
      selectedSize: 'Please Select Size',
      dataProInfo: {id:"Loading",category:"",type:"",name:"Loading",price:{marketPrice:"",salePrice:"Loading"},detail:{color:['red','blue'],size:['','','','',''],des:""},quantity:"",images:{imgProduct:"",imgModel:"",imgDetail:""}},
      canAddToCart: true
    }
    this.handleSelectColor = this.handleSelectColor.bind(this);
    this.handleSelectSize = this.handleSelectSize.bind(this);
    this.handleAddOnceToCart = this.handleAddOnceToCart.bind(this);
  }
  handleSelectColor(value){
    value = value.replace(/^[a-z]?/,function($0){
        return $0.toUpperCase();
      })
    this.setState({
      selectedColor: value
    })
  }
  handleSelectSize(value){
    this.setState({
      selectedSize: value.toUpperCase()
    })
  }
  componentDidMount(){
    const arrPath = this.props.location.pathname.substr(1).split('/');

    const pathCategory = 'http://localhost:8080/src/data/productData/' + arrPath[0] + '/' + arrPath[1] + '.json';

    const idProduct = arrPath[2];

    axios
    .get(pathCategory)
    .then(res => {
      let dataTemp = {};
      res.data.forEach(function(item,index){
        if (item.id === idProduct) {
          dataTemp = JSON.parse(JSON.stringify(item));
        }
      })
      this.setState({
        dataProInfo: dataTemp
      })

    })
    .catch(err => console.log(err))
  }
  handleAddOnceToCart(){
    this.setState({canAddToCart: false})
  }
  render(){

    const {
      handleSelectColor,
      handleSelectSize,
      handleAddOnceToCart
    } = this;

    const {
      selectedColor,
      selectedSize,
      dataProInfo,
      canAddToCart
    } = this.state;

    const proInfo = {
      id: dataProInfo.id*1,
      name: dataProInfo.name,
      salePrice: dataProInfo.price.salePrice,
      srcImg: dataProInfo.images.imgProduct,
      quantity: 1,
      color: selectedColor,
      size: selectedSize
    }

    let hasSelected  = false;

    if (selectedColor !== 'Please Select Color' && selectedSize !=='Please Select Size') {
      hasSelected  = true;
    }

    return(
      <Grid.Row>
        <Grid.Column width={6}>
            <ProductImages img={dataProInfo.images.imgProduct}/>
        </Grid.Column>
        <Grid.Column id="product-info" width={6} textAlign='left'>
            <ProductHeader
              name={dataProInfo.name}
              price={dataProInfo.price}
            />
            <ProductColor
              dataColor={dataProInfo.detail.color}
              selectedColor={selectedColor}
              handleSelectColor={handleSelectColor}
            />
            <ProductSize
              dataSize={dataProInfo.detail.size}
              selectedSize={selectedSize}
              handleSelectSize={handleSelectSize}
            />
            <ProductDetail
              dataDes={dataProInfo.detail.des}
              canAddToCart={canAddToCart}
              hasSelected={hasSelected}
              handleAddToCart={this.props.handleAddToCart}
              handleAddOnceToCart={handleAddOnceToCart}
              proInfo={proInfo}
            />
        </Grid.Column>
      </Grid.Row>
    )
  }
}

export default ProductInfo;

// s 165-80A / Bust 88cm
// m 170-84A / Bust 98cm
// l 175-88A / Bust 108cm
// xl 180-92A / Bust 116cm