import React, { Component } from 'react';
import { Search, Grid, Header } from 'semantic-ui-react'

import 'assets/style/header.scss';

// 自动检索资源
const source = [
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


class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      results: [],
      value: ''
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearching = this.handleSearching.bind(this);
    this.handleReachClear = this.handleReachClear.bind(this);
  }

  // 点击搜索结果现在在文本框内
  handleResultSelect(e, { result }){
    this.setState({ value: result.title })
  }

  handleSearchChange(e, { value }){

    this.setState({ isLoading: true, value: e.target.value })

    setTimeout(() => {
      // 文本框内容为空，返回
      if (this.state.value.length < 1) return;

      // 匹配数据的正则表达式
      // const re = new RegExp(_.escapeRegExp(this.state.value), 'i')

      //
      // const isMatch = (result) => re.test(result.title)

      this.setState({
        isLoading: false,
        // results: _.filter(source, isMatch),
        results: [],
      })

    }, 500)
  }

  handleSearching(e){
    if (e.keyCode !== 13 ) return;

    this.props.history.replace({
      pathname: '/search',
      search: '?' + e.target.value
    });

  }

  handleReachClear(e){
    this.setState({
      isLoading: false,
      results: [],
      value: ''
    })
  }

  render() {
    const { isLoading, value, results } = this.state;
    const {
      handleResultSelect,
      handleSearchChange,
      handleSearching,
      handleReachClear
    } = this;

    return (
      <Search
        className='search-bar'
        placeholder='Search Products'
        loading={isLoading}
        onResultSelect={handleResultSelect}
        onSearchChange={handleSearchChange}
        onKeyDown={handleSearching}
        onBlur={handleReachClear}
        results={results}
        value={value}
      />
    )
  }
}

export default SearchBar;