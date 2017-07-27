import React from 'react';
import { Link } from 'react-router-dom';

const propTypes = {
  menuHeader: PT.string,
  menuItems: PT.arrayOf(PT.object)
}

const FooterSubMenu = (props) => {
  let {
    menuHeader,
    menuItems
  } = props;

  let itemsSubMenuItem = menuItems.map(function(item,index){

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

FooterSubMenu.propTypes = propTypes;

export default FooterSubMenu;