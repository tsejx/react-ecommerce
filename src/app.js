import React from 'react';
import ReactDOM from 'react-dom';
import routes from './router/Route'; //路由配置

import 'semantic-ui-css/semantic.css';// semantic-ui 样式
import 'assets/style/reset.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



ReactDOM.render(
  routes,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}