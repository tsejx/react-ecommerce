import React from 'react';
import Slider from 'react-slick';
import { Grid, Icon } from 'semantic-ui-react';

import ShowcaseHeader from '../header/ShowcaseHeader';
import ProductItem from '../main/ProductItem';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import 'assets/style/carousel.scss';

const dataCommend = [
  {
    id: 1499970633003,
    name: 'Short sleeved cooton shirt',
    marketPrice: 450,
    salePrice: 150,
    images: {
      imgProduct: 'http://localhost:8080/src/assets/img/product/men/short-sleeved-cooton-shirt.jpg',
      imgModel: ''
    }
  },
  {
    id: 1499970633036,
    name: 'Short sleeved cooton shirt',
    marketPrice: 450,
    salePrice: 200,
    images: {
      imgProduct: 'http://localhost:8080/src/assets/img/product/men/short-sleeved-cooton-shirt.jpg',
      imgModel: ''
    }
  },
  {
    id: 1499970633082,
    name: 'Short sleeved cooton shirt',
    marketPrice: 450,
    salePrice: 300,
    images: {
      imgProduct: 'http://localhost:8080/src/assets/img/product/men/short-sleeved-cooton-shirt.jpg',
      imgModel: ''
    }
  },
  {
    id: 1499970633016,
    name: 'Short sleeved cooton shirt',
    marketPrice: 450,
    salePrice: 350,
    images: {
      imgProduct: 'http://localhost:8080/src/assets/img/product/men/short-sleeved-cooton-shirt.jpg',
      imgModel: ''
    }
  },
  {
    id: 1499970633038,
    name: 'Short sleeved cooton shirt',
    marketPrice: 450,
    salePrice: 150,
    images: {
      imgProduct: 'http://localhost:8080/src/assets/img/product/men/short-sleeved-cooton-shirt.jpg',
      imgModel: ''
    }
  },
  {
    id: 1499970633042,
    name: 'Short sleeved cooton shirt',
    marketPrice: 450,
    salePrice: 150,
    images: {
      imgProduct: 'http://localhost:8080/src/assets/img/product/men/short-sleeved-cooton-shirt.jpg',
      imgModel: ''
    }
  },
  {
    id: 1499970633085,
    name: 'Short sleeved cooton shirt',
    marketPrice: 450,
    salePrice: 150,
    images: {
      imgProduct: 'http://localhost:8080/src/assets/img/product/men/short-sleeved-cooton-shirt.jpg',
      imgModel: ''
    }
  },
  {
    id: 1499970633069,
    name: 'Short sleeved cooton shirt',
    marketPrice: 450,
    salePrice: 150,
    images: {
      imgProduct: 'http://localhost:8080/src/assets/img/product/men/short-sleeved-cooton-shirt.jpg',
      imgModel: ''
    }
  },
  {
    id: 1499970243069,
    name: 'Short sleeved cooton shirt',
    marketPrice: 450,
    salePrice: 150,
    images: {
      imgProduct: 'http://localhost:8080/src/assets/img/product/men/short-sleeved-cooton-shirt.jpg',
      imgModel: ''
    }
  },
  {
    id: 1499970633003,
    name: 'Short sleeved cooton shirt',
    marketPrice: 450,
    salePrice: 150,
    images: {
      imgProduct: 'http://localhost:8080/src/assets/img/product/men/short-sleeved-cooton-shirt.jpg',
      imgModel: ''
    }
  },
  {
    id: 1499970633036,
    name: 'Short sleeved cooton shirt',
    marketPrice: 450,
    salePrice: 200,
    images: {
      imgProduct: 'http://localhost:8080/src/assets/img/product/men/short-sleeved-cooton-shirt.jpg',
      imgModel: ''
    }
  },
  {
    id: 1499970633082,
    name: 'Short sleeved cooton shirt',
    marketPrice: 450,
    salePrice: 300,
    images: {
      imgProduct: 'http://localhost:8080/src/assets/img/product/men/short-sleeved-cooton-shirt.jpg',
      imgModel: ''
    }
  },
  {
    id: 1499970633016,
    name: 'Short sleeved cooton shirt',
    marketPrice: 450,
    salePrice: 350,
    images: {
      imgProduct: 'http://localhost:8080/src/assets/img/product/men/short-sleeved-cooton-shirt.jpg',
      imgModel: ''
    }
  },
  {
    id: 1499970633038,
    name: 'Short sleeved cooton shirt',
    marketPrice: 450,
    salePrice: 150,
    images: {
      imgProduct: 'http://localhost:8080/src/assets/img/product/men/short-sleeved-cooton-shirt.jpg',
      imgModel: ''
    }
  },
  {
    id: 1499970633042,
    name: 'Short sleeved cooton shirt',
    marketPrice: 450,
    salePrice: 150,
    images: {
      imgProduct: 'http://localhost:8080/src/assets/img/product/men/short-sleeved-cooton-shirt.jpg',
      imgModel: ''
    }
  },
  {
    id: 1499970633085,
    name: 'Short sleeved cooton shirt',
    marketPrice: 450,
    salePrice: 150,
    images: {
      imgProduct: 'http://localhost:8080/src/assets/img/product/men/short-sleeved-cooton-shirt.jpg',
      imgModel: ''
    }
  },
  {
    id: 1499970633069,
    name: 'Short sleeved cooton shirt',
    marketPrice: 450,
    salePrice: 150,
    images: {
      imgProduct: 'http://localhost:8080/src/assets/img/product/men/short-sleeved-cooton-shirt.jpg',
      imgModel: ''
    }
  },
  {
    id: 1499970243069,
    name: 'Short sleeved cooton shirt',
    marketPrice: 450,
    salePrice: 150,
    images: {
      imgProduct: 'http://localhost:8080/src/assets/img/product/men/short-sleeved-cooton-shirt.jpg',
      imgModel: ''
    }
  },
  {
    id: 1499970633003,
    name: 'Short sleeved cooton shirt',
    marketPrice: 450,
    salePrice: 150,
    images: {
      imgProduct: 'http://localhost:8080/src/assets/img/product/men/short-sleeved-cooton-shirt.jpg',
      imgModel: ''
    }
  },
  {
    id: 1499970633036,
    name: 'Short sleeved cooton shirt',
    marketPrice: 450,
    salePrice: 200,
    images: {
      imgProduct: 'http://localhost:8080/src/assets/img/product/men/short-sleeved-cooton-shirt.jpg',
      imgModel: ''
    }
  },
  {
    id: 1499970633082,
    name: 'Short sleeved cooton shirt',
    marketPrice: 450,
    salePrice: 300,
    images: {
      imgProduct: 'http://localhost:8080/src/assets/img/product/men/short-sleeved-cooton-shirt.jpg',
      imgModel: ''
    }
  },
  {
    id: 1499970633016,
    name: 'Short sleeved cooton shirt',
    marketPrice: 450,
    salePrice: 350,
    images: {
      imgProduct: 'http://localhost:8080/src/assets/img/product/men/short-sleeved-cooton-shirt.jpg',
      imgModel: ''
    }
  },
  {
    id: 1499970633038,
    name: 'Short sleeved cooton shirt',
    marketPrice: 450,
    salePrice: 150,
    images: {
      imgProduct: 'http://localhost:8080/src/assets/img/product/men/short-sleeved-cooton-shirt.jpg',
      imgModel: ''
    }
  },
  {
    id: 1499970633042,
    name: 'Short sleeved cooton shirt',
    marketPrice: 450,
    salePrice: 150,
    images: {
      imgProduct: 'http://localhost:8080/src/assets/img/product/men/short-sleeved-cooton-shirt.jpg',
      imgModel: ''
    }
  },
  {
    id: 1499970633085,
    name: 'Short sleeved cooton shirt',
    marketPrice: 450,
    salePrice: 150,
    images: {
      imgProduct: 'http://localhost:8080/src/assets/img/product/men/short-sleeved-cooton-shirt.jpg',
      imgModel: ''
    }
  },
  {
    id: 1499970633069,
    name: 'Short sleeved cooton shirt',
    marketPrice: 450,
    salePrice: 150,
    images: {
      imgProduct: 'http://localhost:8080/src/assets/img/product/men/short-sleeved-cooton-shirt.jpg',
      imgModel: ''
    }
  },
  {
    id: 1499970243069,
    name: 'Short sleeved cooton shirt',
    marketPrice: 450,
    salePrice: 150,
    images: {
      imgProduct: 'http://localhost:8080/src/assets/img/product/men/short-sleeved-cooton-shirt.jpg',
      imgModel: ''
    }
  }
];

class RecommendCarousel extends React.Component {
  constructor(props) {
    super(props);

  }
  render(){
    var settings = {
      accessibility: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1
    };

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
        <Slider {...settings}>
          {itemsRecommend}
        </Slider>
      </Grid.Column>
    )
  }
}

export default RecommendCarousel;