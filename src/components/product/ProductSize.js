import React from 'react';
import { Header, Button } from 'semantic-ui-react';
import SizeGuide from './SizeGuide';

const propTypes = {
  dataSize: PT.array,
  selectedSize: PT.string,
  handleSelectSize: PT.func
}

class ProductSize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clsActive: ''
    }
    this.activeSize = this.activeSize.bind(this);
  }
  activeSize(size){
    this.setState({
      clsActive: size
    })
  }
  render(){
    const {
      activeSize
    } = this;

    const {
      clsActive
    } = this.state;

    const {
      dataSize,
      selectedSize,
      handleSelectSize
    } = this.props;


    const itemsSizeBtn = dataSize.map(function(item,index){
      return(
        <Button
          as='li'
          key={index}
          className={clsActive === item?'selected':''}
          onClick={ () => {
            handleSelectSize(item);
            activeSize(item);
          }}
        >
          {item}
        </Button>
      )
    })

    return(
      <div class="product-size">
        <Header as='h4'>Size:{" "}<span>{selectedSize}</span></Header>
        <Button.Group as='ul'>
          {itemsSizeBtn}
        </Button.Group>
        <SizeGuide/>
      </div>
    )
  }
}

ProductSize.propTypes = propTypes;

export default ProductSize;