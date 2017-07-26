import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import '../../util/mockSizeGuide.js';
import axios from 'axios';

class SizeGuide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:{}
    }
  }
  componentDidMount() {
    axios
    .get('/sizeguide')
    .then(res => this.setState({data: res.data.data[0]}))
    .catch(err => console.log(err))
  }
  render(){
    const {
      data
    } = this.state;

    return(
      <Modal trigger={<a className='product-size-guide'>SIZE GUIDE</a>}>
        <Modal.Header>Size Guide</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='big' src={data.image} />
          <Modal.Description>
            <Header>Men</Header>
            {data.des}
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }

}

export default SizeGuide;