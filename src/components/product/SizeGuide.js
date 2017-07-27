import React from 'react'
import { Header, Image, Modal } from 'semantic-ui-react'
import '../../util/mockSizeGuide.js';
import axios from 'axios';

class SizeGuide extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSizeGuide:{}
    }
  }

  componentDidMount() {
    axios
    .get('/sizeguide')
    .then(res => this.setState({dataSizeGuide: res.data.data[0]}))
    .catch(err => console.log(err))
  }

  render(){
    return(
      <Modal trigger={<a className='product-size-guide'>SIZE GUIDE</a>}>
        <Modal.Header>Size Guide</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='big' src={this.state.dataSizeGuide.image} />
          <Modal.Description>
            <Header>Men</Header>
            {this.state.dataSizeGuide.des}
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }

}

export default SizeGuide;