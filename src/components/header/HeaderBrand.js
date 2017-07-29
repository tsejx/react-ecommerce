import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react';



const HeaderBrand = () => (
  <Header as='hgroup' id="header-brand" icon textAlign='center'>
      <Header.Content as='h1' className='brand-logo'>
        <Link to='/'>
          <img src={require('../../assets/img/logo.png')} alt="iGo"/>
        </Link>
      </Header.Content>
      <Header.Content as='h3' className='brand-des'>
        A pursuit of exquisite e-commerce platform.
      </Header.Content>
  </Header>
)

export default HeaderBrand;