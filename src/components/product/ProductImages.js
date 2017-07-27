import React from 'react';
import { Image } from 'semantic-ui-react';

// 左侧大图
const ProductImages = (props) => (
  <div class="product-image-container">
    <Image src={props.img} fluid />
  </div>
);

export default ProductImages;