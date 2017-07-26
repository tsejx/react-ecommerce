import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon, Image } from 'semantic-ui-react';

let propTypes = {
  id: PT.string,
  category: PT.string,
  type: PT.string,
  name: PT.string,
  price: PT.objectOf(PT.number),
  images: PT.object
}

class ProductItem extends React.Component {
  constructor(props) {
    super(props);

  }
  render(){
    let {
      id,
      category,
      type,
      name,
      price:{
        marketPrice,
        salePrice
      },
      images
    } = this.props;

    return(
      <Card className='product-info'>
        <Link to={`/${category}/${type}/${id}`} >
          <Image className='' src={images.imgProduct} />
        </Link>
        <Card.Content>
          <Card.Header>
            <Link to={`/${category}/${type}/${id}`}>
              {name}
            </Link>
          </Card.Header>
          <Card.Meta>
            <span className='market-price'>
              ${marketPrice}
            </span>
            <span className='sale-price'>
              ${salePrice}
            </span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='heart' />
            Add Wishlist
          </a>
          <Link to={`/${category}/${type}/${id}`}>
            <Icon name='shop' />
            Add Cart
          </Link>
        </Card.Content>
      </Card>
    )
  }
}

ProductItem.propTypes = propTypes;

export default ProductItem;