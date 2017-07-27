import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect,browserHistory } from 'react-router-dom';
import axios from 'axios';

// Publick 公用组件
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

// Home 首页组件
import Home from '../components/home/HomeContainer';

// Classification 分类页组件
import FilterSite from '../components/main/FilterSite';

// Search 搜索页组件
import SearchSite from '../components/main/SearchSite';

// Detail 商品详情页组件
import ProductDetailSite from '../components/product/ProductDetailSite';

// Cart 购物车组件
import CartSite from '../components/cart/CartSite';

// Register & Login 登录注册组件
import LoginSite from '../components/user/LoginSite';
import RegisterSite from '../components/user/RegisterSite';

class RouteApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      cart: []
    }
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleAddToCart(product){
    this.setState({cart: [...this.state.cart,product]})
  }

  handleLogin(email,password){
    let dataUser = new Array;

    const _this = this;

    axios
    .get('http://localhost:8080/src/data/userdata.json')
    .then(res=> {
      res.data.forEach(function(item,index){
        if(item.email != email)return;
        if(item.password != password)return;
        _this.setState({isLogin:true});
      })
    })
    .catch(err=>console.log(err))
  }

  render(){

    const {
      handleAddToCart,
      handleLogin
    } = this;

    const {
      cart,
      isLogin
    } = this.state;

    return(
      <Router history={browserHistory}>
        <div id='body'>
          <Route children={({location})=>{
            return(
              <Header location={location} cart={cart}/>
            )
          }}/>
          <Switch>
            <Redirect from='/home' to='/' />
            <Route exact path='/' component={Home} />
            <Route path='/search' component={SearchSite} />
            <Route path='/cart' children={()=>{
              return(<CartSite isLogin={isLogin} cart={cart} handleLogin={handleLogin}/>)
            }} />
            <Route path='/login' children={()=>{
              return(<LoginSite isLogin={isLogin} handleLogin={handleLogin}/>)
            }} />
            <Route path='/register' component={RegisterSite} />
            <Route path='/:category/:type/**' children={()=>{
              return(<ProductDetailSite handleAddToCart={handleAddToCart}/>)
            }} />
            <Route path='/:category' component={FilterSite} />
            <Redirect from='*' to='/'  />
          </Switch>
          <Route component={Footer}/>
        </div>
      </Router>
    )
  }
}

export default RouteApp;