import React from 'react';
import { Link } from 'react-router-dom';

const propTypes = {
  menuHeader: 'string',
  menuItems: 'array'
}

class FooterSubMenu extends React.Component {
  constructor(props) {
    super(props);

  }
  render(){
    let {
      menuHeader,
      menuItems
    } = this.props;

    let itemsSubMenuItem = menuItems.map(function(item,index){

      // 为了复习字符串数组方法和正则表达式，所以我的数据写得比较奇葩
      const link = item.link
      .replace(/\bigo/g,'iGo')
      .replace(/\-/g,' ')
      .replace(/^[a-z]?/,function($0){
        return $0.toUpperCase();
      })
      .replace(/\&[a-z]?/g,function($0){
        const s = $0.substring(1).toUpperCase();
        return ' & ' + s;
      });

      return(
        <li key={index} className="ft-submenu-item">
          <Link className='ft-submenu-link' to={item.path}>{link}</Link>
        </li>
      )
    })

    return(
      <div>
        <h4 className='ft-submenu-header'>{menuHeader.toUpperCase()}</h4>
        <ul className="ft-submenu-list">
          {itemsSubMenuItem}
        </ul>
      </div>
    )
  }
}

export default FooterSubMenu;