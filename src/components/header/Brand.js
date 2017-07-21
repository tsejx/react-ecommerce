import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

class HeaderBrand extends React.Component {

  render(){
    return (
      <Header id="header-brand" as='h2' icon textAlign='center'>
          <Header.Content className='brand-logo'>
          <Link to='/'>
            <img src="http://localhost:8080/src/assets/img/logo.png" alt="iGo"/>
          </Link>
          </Header.Content>
          <Header.Content className='brand-description'>
            A pursuit of exquisite e-commerce platform.
          </Header.Content>
      </Header>
    )
  }
}

export default HeaderBrand;