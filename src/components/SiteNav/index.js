import React from 'react';
import MenuBar from './MenuBar';
import SearchBar from './SearchBar';
import './index.scss';

const SiteNav = props => {
  return (
    <header id="site-nav">
      <MenuBar />
      <SearchBar />
    </header>
  );
};

export default SiteNav;
