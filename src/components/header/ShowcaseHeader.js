import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

const propTypes = {
  iconHeader: PT.string,
  headerMain: PT.string.isRequired,
  headerSub: PT.string
}

const ShowcaseHeader = (props) => {

  const {
    iconHeader,
    headerMain,
    headerSub
  } = props;

  let showIcon = null;

  if (!!iconHeader) {
    showIcon = (<Icon name={iconHeader} />)
  }

  return(
    <Header
      as='h2'
      textAlign='center'
      icon
    >
      {showIcon}
      {headerMain}
      <Header.Subheader>
        {headerSub}
      </Header.Subheader>
    </Header>
  )
}

ShowcaseHeader.propTypes = propTypes;

export default ShowcaseHeader;
