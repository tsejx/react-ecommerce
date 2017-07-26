import React from 'react';
import { Grid, Divider, Comment } from 'semantic-ui-react';

import ProductCommentItem from './ProductCommentItem';

import '../../util/mockComment.js';
import axios from 'axios';

class ProductComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataComments: []
    }
  }
  componentDidMount() {
    axios
    .get('/comment',{dataType: 'json'})
    .then(res => {
      this.setState({dataComments: res.data.data})
    })
    .catch(err => {
      console.log(err);
    })
  }
  render(){
    const {
      dataComments
    } = this.state;

    const itemsComment = dataComments.map(function(item,index){
      return(
        <ProductCommentItem
          key={item.id}
          {...item}
        />
      )
    })

    return(
      <Grid.Column width={12}>
        <Divider horizontal><span>Product Comment</span></Divider>
        <Comment.Group id='comment-area' size='large'>
          {itemsComment}
        </Comment.Group>
      </Grid.Column>
    )
  }
}

export default ProductComment;