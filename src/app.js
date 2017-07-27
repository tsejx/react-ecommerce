import React from 'react';
import ReactDOM from 'react-dom';
import RouteApp from './router/Route'; //路由配置
import 'semantic-ui-css/semantic.css';// semantic-ui 样式
import 'assets/style/reset.scss';

ReactDOM.render(
  <RouteApp/>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}