import React from 'react';
import ReactDOM from 'react-dom';
// import RouteApp from './router/Route'; //路由配置
// import 'semantic-ui-css/semantic.css'; // semantic-ui 样式
// import 'assets/style/reset.scss';

class App extends React.Component {
    render(){
        return(
            <div>
                Hello world!!!!!
            </div>
        )
    }
}

// ReactDOM.render(
//   <RouteApp/>,
//   document.getElementById('root')
// );

ReactDOM.render(<App/>, document.querySelector('#root'));

if (module.hot) {
  module.hot.accept();
}
