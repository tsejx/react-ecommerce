import React from 'react';
import { Grid,  } from 'semantic-ui-react';
import ProductImages from './ProductImages';
import ProductHeader from './ProductHeader';
import ProductColor from './ProductColor';
import ProductSize from './ProductSize';
import ProductCount from './ProductCount';
import ProductDetail from './ProductDetail';
import axios from 'axios';

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

    const pathCategory = '/src/data/productData/' + arrPath[0] + '/' + arrPath[1] + '.json';

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