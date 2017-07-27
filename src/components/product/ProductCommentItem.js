import React from 'react';
import { Comment, Icon, Rating } from 'semantic-ui-react';

const propTypes = {
  urlAvatar: PT.string,
  username: PT.string,
  date: PT.string,
  rating: PT.number,
  content: PT.string
}

const ProductCommentItem = (props) => {
  const {
    urlAvatar,
    username,
    date,
    rating,
    content
  } = props;

  const stars = new Array();

  for (var i = 0; i < rating; i++) {
    stars.push(<Icon key={i} name='star' />);
  }

  return(
  <Comment as='li'>
    <Comment.Avatar as='span' src={urlAvatar} />
    <Comment.Content>
      <Comment.Author as='span'>{username}</Comment.Author>
      <Comment.Metadata>
        <span>{date}</span>
        <Rating as='span' icon='star' disabled defaultRating={rating} maxRating={5} />
      </Comment.Metadata>
      <Comment.Text as='p'>
        {content}
      </Comment.Text>
    </Comment.Content>
  </Comment>
  )
}

ProductCommentItem.propTypes = propTypes;

export default ProductCommentItem;