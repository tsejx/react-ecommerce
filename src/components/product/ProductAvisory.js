import React from 'react'
import { Grid, Divider, Accordion, Icon } from 'semantic-ui-react'
import '../../util/mockAvisory.js';

const ProductAvisory = (props) => (
  <Grid.Column id='product-avisory' width={12}>
    <Divider horizontal><span>Product Avisory</span></Divider>
    <Accordion panels={props.dataAvisory}/>
  </Grid.Column>
)

export default ProductAvisory;