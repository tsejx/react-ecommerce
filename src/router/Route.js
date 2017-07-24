import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect,browserHistory } from 'react-router-dom';

// Publick 公用组件
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

// Home 首页组件
import Home from '../components/main/HomeContainer';

// Classification 分类页组件
import SortSite from '../components/main/SortSite';

// Search 搜索页组件
import SearchSite from '../components/main/SearchSite';

// Detail 商品详情页组件
import ProductDetailSite from '../components/product/ProductDetailSite';

// Cart 购物车组件
import CartSite from '../components/cart/CartSite';

// Register & Login 登录注册组件
import SigninSite from '../components/user/SigninSite';
import RegisterSite from '../components/user/RegisterSite';



const RouteConfig =  (
  <Router history={browserHistory}>
    <div id='body'>
      <Route component={Header} />
      <Switch>
        <Redirect from='/home' to='/' />
        <Route exact path='/' component={Home} />
        <Route path='/search' component={SearchSite} />
        <Route path='/cart' component={CartSite} />
        <Route path='/signin' component={SigninSite} />
        <Route path='/register' component={RegisterSite} />
        <Route path='/:category/:type/**' component={ProductDetailSite} />
        <Route path='/:category' component={SortSite} />
        <Redirect from='*' to='/'  />
      </Switch>
      <Route component={Footer}/>
    </div>
  </Router>
)

export default RouteConfig;