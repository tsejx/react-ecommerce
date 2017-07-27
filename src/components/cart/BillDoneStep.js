import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Header } from 'semantic-ui-react';

class BillDoneStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerId: '',
      seconds: 3
    }
  }
  componentDidMount() {
    let time = 3;
    this.timerinId = setInterval(() => {
      this.setState({seconds: time--})
    }, 1000)
    this.timeoutId = setTimeout(()=>{
      window.location.href = '/';
    },4000)
  }
  componentWillMount() {
    clearTimeout(this.timeoutId);
    clearInterval(this.timeinId);
  }
  render(){

    const {
      seconds
    } = this.state;

    return(
      <Grid.Row id='checkout'>
        <Grid.Column id='checkout-controller' width='12' textAlign='center'>
          <Header as='h2' className='controller-header' content='THANK YOU FOR SHOPPING WITH US'/>
          <p className='billdone-tips'>This page will jump to home page in {seconds} seconds,or click <Link to='/'>HERE</Link> to jump.</p>
        </Grid.Column>
      </Grid.Row>
    )
  }
}

export default BillDoneStep;