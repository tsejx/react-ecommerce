import React, { Component } from 'react';
import { Header, Button } from 'semantic-ui-react';

const propTypes = {
  dataColor: PT.array,
  selectedColor: PT.string,
  handleSelectColor: PT.func
}

class ProductColor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clsActive: ''
    }
    this.activeColor = this.activeColor.bind(this);
  }

  activeColor(color){
    this.setState({
      clsActive: color
    })
  }

  render(){
    const {
      activeColor
    } = this;

    const {
      clsActive
    } = this.state;

    const {
      dataColor,
      selectedColor,
      handleSelectColor
    } = this.props;

    const itemsColorBtn = dataColor.map(function(item,index){
      return(
        <Button
          as='li'
          disabled={false}
          key={index}
          className={clsActive === item ?'selected':''}
          color={item}
          onClick={() => {
            handleSelectColor(item)
            activeColor(item);
          }}
        ></Button>
      )
    })

    return(
      <div class="product-color">
        <Header as='h4'>Color:{" "}<span>{selectedColor}</span></Header>
        <Button.Group as='ul' size='small'>
          {itemsColorBtn}
        </Button.Group>
      </div>
    )
  }
}

ProductColor.propTypes = propTypes;

export default ProductColor;