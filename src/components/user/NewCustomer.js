import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Header, Button } from 'semantic-ui-react';



class NewCustomer extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return(
      <div className='new-customer'>
        <Header as='h4'>
          NEW CUSTOMER
          <Header.Subheader>
            Create a new account to make shopping even easier.
          </Header.Subheader>
        </Header>
        <Link className='join-us-btn' to='/register'>JOIN US</Link>
      </div>
    )
  }
}

export default NewCustomer;