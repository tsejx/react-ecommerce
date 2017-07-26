import React from 'react';
import Slider from 'react-slick';
import { Grid, Icon } from 'semantic-ui-react';

import ShowcaseHeader from '../header/ShowcaseHeader';
import ProductItem from '../main/ProductItem';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import 'assets/style/carousel.scss';

import axios from 'axios';

class RecommendCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCommend: []
    }
  }
  componentDidMount() {
    axios
    .get('http://localhost:8080/src/data/productData/hotSale.json')
    .then(res=>this.setState({dataCommend: [...res.data]}))
    .catch(err=>console.log(err))
  }
  render(){

    var settings = {
      accessibility: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
    };

    const {
      dataCommend
    } = this.state;

    const itemsRecommend = dataCommend.map(function(item,index){
      return(
        <div key={index}><ProductItem {...item}/></div>
      )
    })

    return(
      <Grid.Column id='recommend' width='12'>
        <ShowcaseHeader headerMain='RECOMMEND TO BUY'/>
        <span className='change'>
          <Icon name='refresh'/>
          CHANGE
        </span>
        {dataCommend.length ? <Slider {...settings}>{itemsRecommend}</Slider> : ''}
      </Grid.Column>
    )
  }
}

export default RecommendCarousel;