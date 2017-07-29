import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import ShowcaseHeader from '../header/ShowcaseHeader.js';
import ProductItem from '../main/ProductItem.js';
import 'assets/style/product.scss';
import axios from 'axios';

class HomeProductSection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataHotSaleProduct: [{id:"Loading",category:"",type:"",name:"Loading",price:{marketPrice:1,salePrice:1},detail:{color:['red','blue'],size:['','','','',''],des:""},quantity:"",images:{imgProduct:"",imgModel:"",imgDetail:""}}],
      isReadMore: false
    }
    this.handleReadMoreProduct = this.handleReadMoreProduct.bind(this);
  }

  componentDidMount() {
    axios
    .get('/src/data/productData/hotSale.json')
    .then(res => {
      this.setState({dataHotSaleProduct: res.data})
    })
    .catch(err => console.log(err))
  }

  handleReadMoreProduct(){
    this.setState({
      isReadMore: true
    })
  }

  render() {

    const {
      isReadMore,
      dataHotSaleProduct
    } = this.state;

    let itemsProductCard = dataHotSaleProduct.map(function(item){
      return(
        <ProductItem
          key={item.id}
          {...item}
        />
      )
    })

    const btnReadMore = (
      <Button
        className='load-more-btn'
        fluid
        onClick={this.handleReadMoreProduct}
      >
        READ MORE
      </Button>
    )

    let controllerReadMore = null ,itemsReadMoreProduct = null;

    return (
      <Grid id='hot-products' textAlign='center'>
        <Grid.Column width={13}>
          <ShowcaseHeader
            headerMain='FEATURE PRODUCTS'
            headerSub='Best Collection fo You'
            iconHeader='gift'
          />
          <div id="product-list">
            {itemsProductCard}
            {isReadMore?itemsProductCard:''}
          </div>
          {!isReadMore?btnReadMore:''}
        </Grid.Column>
      </Grid>
    )
  }
}

export default HomeProductSection;