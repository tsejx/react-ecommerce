import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
import 'assets/style/header.scss';

const dataHeaderMenu = ['men', 'ladies', 'kids'];

class HeaderNavigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home'
    }
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }){
    this.setState({ activeItem: name })
  }

  render() {

    const { activeItem } = this.state;

    const { handleItemClick } = this;

    let listMenu = dataHeaderMenu.map(function(item,index){
      return(
        <Menu.Item
          as='span'
          key={index}
          className="nav-item"
          active={activeItem === item}
          onClick={handleItemClick} >
          <NavLink
            to={'/' + item}
            activeClassName="active"
            >
            {item.toUpperCase()}
          </NavLink>
        </Menu.Item>
      )
    })

    return (
      <Menu as='nav' secondary id="header-nav">
        {listMenu}
      </Menu>
    )
  }
}

export default HeaderNavigation;