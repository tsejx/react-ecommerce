import React from 'react';
import { Link, Switch } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const dataLadiesMenu = ['shirts','dresses','short','skirts','knitwear','shoes'];

const dataMenMenu = ['t-shirt','shirts','jeans','sportwear','shoes'];

const dataKidsMenu = ['sets','tops','outdoor'];

const propTypes = {
  handleProList: PT.func
}

class SidebarMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: ''
    }
    this.handleItemClick = this.handleItemClick.bind(this);
  }
  handleItemClick(item){
    this.setState({activeItem: item});
  }
  render(){
    const { handleItemClick } = this;
    const { activeItem } = this.state;
    const { handleProList } = this.props;

    // 当前页面二级路径
    const matchUrl = this.props.match.url;

    // 侧边栏菜单数据
    let dataSidebarMenu = null;

    switch(matchUrl){
      case '/ladies':
        dataSidebarMenu = dataLadiesMenu;
        break;
      case '/men':
        dataSidebarMenu = dataMenMenu;
        break;
      case '/kids':
        dataSidebarMenu = dataKidsMenu;
        break;
    }

    // 遍历侧边栏数据生成边栏菜单
    const itemsSidebarMenu = dataSidebarMenu.map(function(item,index){

      let itemMenu = item.replace(/\-/g,' ').replace(/^[a-z]?/,function($0){
        return $0.toUpperCase();
      });

      const link = (
        <Link
          to={ matchUrl + '/' +item }
        >{itemMenu}</Link>
      );

      return (
        <Menu.Item
          as='span'
          key={index}
          className={activeItem === item?'selected':''}
          onClick={() => {
            handleItemClick(item)
            handleProList(matchUrl + '/' +item)
          }}
          children={link}
        />
      )
    })

    return(
      <Menu className='sidebar-menu' text vertical>
        <Menu.Item as='h3' header >SHOP BY PRODUCT</Menu.Item>
          {itemsSidebarMenu}
      </Menu>
    )
  }
}

export default SidebarMenu;