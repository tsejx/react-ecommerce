import React from 'react'
import { Grid, Divider, Accordion } from 'semantic-ui-react'

const ProductAvisory = (props) => (
  <Grid.Column id='product-avisory' width={12}>
    <Divider horizontal><span>Product Avisory</span></Divider>
    <Accordion panels={props.dataAvisory}/>
  </Grid.Column>
)

export default ProductAvisory;