import React from 'react';
import { Header, Menu, Dropdown, } from 'semantic-ui-react';

import 'assets/style/main.scss';

import ProductList from './ProductList';
import Pagination from './Pagination';

import axios from 'axios';

// Product Sort 商品排序
const options = [
  { key: 1, text: 'Best Match', value: 1 },
  { key: 2, text: 'Lowest Price', value: 2 },
  { key: 3, text: 'Highest Price', value: 3 },
];

const propTypes = {
  dataProducts: PT.array,
  showcaseHeader: PT.string
}

class ProductContainer extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    const {
      location,
      dataProducts,
      showcaseHeader
    } = this.props;

    // 商品总数量
    let itemsTotal = dataProducts.length;

    // 总页码
    var page = 0;

    if (itemsTotal<=12) {
      page = 1;
    }else if(itemsTotal%12 !== 0){
      page = Math.floor(itemsTotal/12) + 1;
    }else{
      page = itemsTotal/12;
    }

    const currentPage = this.props.location.hash?this.props.location.hash.substr(1)*1:1;

    let dataDisplay = dataProducts.slice((currentPage-1)*12,currentPage*12);

    return (
      <div id='product-showcase'>
        <Header as='h2' textAlign='left' content={showcaseHeader}/>
        <div style={{height: 50}}>
          <p>
            <strong>Total</strong> {itemsTotal} Items
          </p>
          <Menu className='sequence-menu' compact>
            <Dropdown placeholder='SORT BY' options={options} simple item />
          </Menu>
        </div>
        <ProductList dataProducts={dataDisplay}/>
        <Pagination
          page={page}
          currentPage={currentPage}
        />
      </div>
    )
  }
}

export default ProductContainer;