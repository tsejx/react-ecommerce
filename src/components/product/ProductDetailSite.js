import React from 'react';
import { Route } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import 'assets/style/product.scss';

import ProductInfo from './ProductInfo';
import ProductComment from './ProductComment';
import ProductAvisory from './ProductAvisory';
import RecommendCarousel from '../carousel/RecommendCarousel';

import axios from 'axios';

import Scroll from '../scroll/Scroll';

const propTypes = {
  handleAddToCart: PT.func
}

class ProductDetailSite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataAvisory: []
    }
  }
  componentDidMount() {
    axios
    .get('/avisory')
    .then(res=>this.setState({dataAvisory:[...(res.data.data)]}))
    .catch(err=>console.log(err))
    Scroll(290,300);
  }
  render(){
    return(
      <Grid textAlign='center'>
        <Route children={( { location } )=>{
          return(
            <ProductInfo
              location={location}
              handleAddToCart={this.props.handleAddToCart}
            />
          )
        }}/>
        <ProductComment/>
        <ProductAvisory dataAvisory={this.state.dataAvisory}/>
        <RecommendCarousel/>
      </Grid>
    )
  }
}

ProductDetailSite.propTypes = propTypes;

export default ProductDetailSite;