import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';

const HeaderDivider = (props) => {

  const secondary = props.location.pathname.match(/\/[a-z]+/)[0].substr(1);

  return(
    <Divider id='header-divider' horizontal>
      <Link to='/'>iGo.com</Link>
      {" / "}
      <span>{secondary}</span>
    </Divider>
  )
}

export default HeaderDivider;