import React from 'react';
import { Route } from 'react-router-dom';
import { Menu, Button, Icon } from 'semantic-ui-react';

import 'assets/style/header.scss';

import PopupSignin from '../popup/PopupSignin';
import PopupCart from '../popup/PopupCart';
import SearchBar from './SearchBar';
import TopBtn from '../main/TopBtn';

const dataToolBtnsRight = [
  {
    title: 'sign-in',
    icon: 'user'
  },
  {
    title: 'favorite',
    icon: 'heart'
  },
  {
    title: 'message',
    icon: 'mail'
  },
  {
    title: 'cart',
    icon: 'shop'
  }
]

const ToolBtn = (index,feature,icon) => (
    <Button className="tool-btn" animated='fade' floated='right' tabIndex={index}>
      <Button.Content hidden>{feature}</Button.Content>
      <Button.Content visible>
        <Icon name={icon} />
      </Button.Content>
    </Button>
)

class ToolWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: ''
    }
    this.searchProduct = this.searchProduct.bind(this);
    this.handleFixedMenu = this.handleFixedMenu.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll',this.handleFixedMenu);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleFixedMenu);
  }
  handleFixedMenu(){
    let menuBar = this.refs.headerTool;
    let menuBarTop = menuBar.offsetTop;
    let topBtn = this.refs.tbBtn.refs.tbBtn.ref;
    // 滚动滚动条当菜单贴到顶部的时候让其变成固定定位
    (window.onscroll = function (){
      if(menuBarTop - getScrollTop() <= -30){
        menuBar.style.position = 'fixed';
        menuBar.style.top = '0';
      }else{
        menuBar.style.position = '';
        menuBar.style.top = '';
      }
      if(getScrollTop() > window.innerHeight){
        topBtn.style.display = 'block';
      }else{
        topBtn.style.display = '';
      }
    })();
    function getScrollTop() {
      return document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
    }
  }

  searchProduct(e){
    if (e.keyCode !== 13) console.log(1);
  }
  render() {

    let itemsToolRight = dataToolBtnsRight.map(function(item,index){

        let title = item.title
          .replace(/\-/g,' ')
          .replace(/^[a-z]?/,function($0){
            return $0.toUpperCase();
          })

        let popupWrap = null;

        let btnTool = ToolBtn(index,title,item.icon);

        switch(item.title){
          case 'sign-in':
            popupWrap = (<PopupSignin btnTool={btnTool} />);
            break;
          case 'favorite':
            popupWrap = (btnTool);
            break;
          case 'message':
            popupWrap = (btnTool);
            break;
          case 'cart':
            popupWrap = (<PopupCart btnTool={btnTool}/>);
            break;
        }
        return (
          <Menu.Item key={index}>
            {popupWrap}
          </Menu.Item>
        )
    })

    return (
      <div
        id="header-tool"
        ref='headerTool'
        style={{
          width: '100%'
        }}
      >
        <Menu
          secondary
          className="header-tool"
        >
          <Menu.Menu >
            {itemsToolRight}
          </Menu.Menu>
          <Menu.Menu position='right'>
            <Route component={SearchBar}/>
          </Menu.Menu>
        </Menu>
        <TopBtn ref='tbBtn'/>
      </div>
    )
  }
}

export default ToolWrapper;