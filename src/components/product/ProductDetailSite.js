import React from 'react';
import { Route } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import ProductInfo from './ProductInfo';
import ProductComment from './ProductComment';
import ProductAvisory from './ProductAvisory';
import RecommendCarousel from '../carousel/RecommendCarousel';
import Scroll from '../scroll/Scroll';
import 'assets/style/product.scss';
import '../../util/mockAvisory.js';
import axios from 'axios';

const propTypes = {
  handleAddToCart: PT.func
}

class ProductDetailSite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataAvisory: [],
      dataComments: []
    }
  }
  componentDidMount() {
    axios
    .get('/comment',{dataType: 'json'})
    .then(res => {
      this.setState({dataComments: res.data.data})
    })
    .catch(err => {
      console.log(err);
    })

    axios
    .get('/avisory',{dataType: 'json'})
    .then(res=>this.setState({dataAvisory: res.data.data}))
    .catch(err=>console.log(err))

    Scroll(290,300);
  }
  render(){
    return(
      <Grid as='section' textAlign='center'>
        <Route children={( { location } )=>{
          return(
            <ProductInfo
              location={location}
              handleAddToCart={this.props.handleAddToCart}
            />
          )
        }}/>
        <ProductComment dataComments={this.state.dataComments}/>
        <ProductAvisory dataAvisory={this.state.dataAvisory}/>
        <RecommendCarousel/>
      </Grid>
    )
  }
}

ProductDetailSite.propTypes = propTypes;

export default ProductDetailSite;