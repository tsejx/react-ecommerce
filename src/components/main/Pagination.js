import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import Scroll from '../scroll/Scroll';

const propTypes = {
  page: PT.number,
  currentPage: PT.number
}

class Pagination extends Component {
  constructor(props) {
    super(props);

    this.handleItemClick = this.handleItemClick.bind(this);
  }
  handleItemClick(){
    Scroll(290,300);
  }
  render(){
    const {
      handleItemClick
    } = this;

    const {
      page,
      currentPage
    } = this.props;

    let itemsPagination = new Array();

    for (var i = 0; i < page; i++) {
      const link = (<Link to={'#'+(i+1)}>{i+1}</Link>)
      itemsPagination.push(
        <Menu.Item
          as='span'
          key={i}
          className={i+1 === currentPage?'selected':''}
          children={link}
          onClick={this.handleItemClick}
        />
      )
    }

    return(
      <Menu className='page-bar' pagination>
        {itemsPagination}
      </Menu>
    )
  }
}

Pagination.propTypes = propTypes;

export default Pagination;