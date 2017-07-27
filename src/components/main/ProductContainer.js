import React from 'react';
import { Header, Dropdown, } from 'semantic-ui-react';
import ProductList from './ProductList';
import Pagination from './Pagination';
import axios from 'axios';
import 'assets/style/main.scss';
import 'assets/style/product.scss';

const propTypes = {
  dataProducts: PT.array,
  showcaseHeader: PT.string
}

// Product Filter 商品排序
const options = [
  { text: 'Best Match', value: 'Best Match' },
  { text: 'Lowest Price', value: 'Lowest Price' },
  { text: 'Highest Price', value: 'Highest Price' }
];

class ProductContainer extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      filter: 'Best Match'
    }
    this.handleSelectSort = this.handleSelectSort.bind(this);
    this.filterHighestPrice = this.filterHighestPrice.bind(this);
    this.filterLowestPrice = this.filterLowestPrice.bind(this);
  }

  handleSelectSort(e, { value }){
    this.setState({filter: value})
  }

  filterHighestPrice(arr){
   return arr.length <= 1 ? arr : this.filterHighestPrice(arr.slice(1).filter(item => item.price.salePrice >= arr[0].price.salePrice)).concat(arr[0], this.filterHighestPrice(arr.slice(1).filter(item => item.price.salePrice < arr[0].price.salePrice)));
  }

  filterLowestPrice(arr){
    // 快速排序 Quick Sort
    return arr.length <= 1 ? arr : this.filterLowestPrice(arr.slice(1).filter(item => item.price.salePrice <= arr[0].price.salePrice)).concat(arr[0], this.filterLowestPrice(arr.slice(1).filter(item => item.price.salePrice > arr[0].price.salePrice)));
  }

  render() {
    const {
      location,
      dataProducts,
      showcaseHeader
    } = this.props;

    const {
      filter
    } = this.state;

    const {
      handleSelectSort
    } = this;

    // Total Quantity of Products 商品总数量
    let itemsTotal = dataProducts.length;

    // Total Pages 总页码
    var page = 0;

    if (itemsTotal<=12) {
      page = 1;
    }else if(itemsTotal%12 !== 0){
      page = Math.floor(itemsTotal/12) + 1;
    }else{
      page = itemsTotal/12;
    }

    const currentPage = this.props.location.hash?this.props.location.hash.substr(1)*1:1;

    let dataDisplay = new Array()

    switch(filter){
      case 'Best Match':
        dataDisplay = dataProducts;
        break;
      case 'Lowest Price':
        dataDisplay = this.filterLowestPrice(dataProducts.slice(0))
        console.log(dataDisplay);
        break;
      case 'Highest Price':
        dataDisplay = this.filterHighestPrice(dataProducts.slice(0))
        break;
    }


    dataDisplay = dataDisplay.slice((currentPage-1)*12,currentPage*12);

    return (
      <div id='product-showcase'>
        <Header as='h2' textAlign='left' content={showcaseHeader}/>
        <div className='pro-filter-bar'>
          <p className='total-num'>
            <strong>Total</strong> {itemsTotal} Items
          </p>
          <Dropdown className='filter-menu' defaultValue='Best Match' options={options} selection item onChange={handleSelectSort}/>
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

ProductContainer.propTypes = propTypes;

export default ProductContainer;