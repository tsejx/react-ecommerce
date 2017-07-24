import React from 'react';
import { Route } from 'react-router-dom';
import { Grid, Segment, Loader } from 'semantic-ui-react';
import ProductContainer from './ProductContainer';
import Scroll from '../scroll/Scroll';
import axios from 'axios';

import 'assets/style/main.scss';

class SearchSite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataProducts: []
    }
  }
  componentDidMount() {

    const searchVal = this.props.location.search.substr(1);

    const regSearch = new RegExp(searchVal,'gim');

    axios
    .get('http://localhost:8080/src/data/productData/database.json')
    .then(res => {
      const temp = new Array;
      res.data.forEach(function(item,index){
        if (regSearch.test(item.name)) temp.push(item);
      })
      console.log(temp);
      this.setState({dataProducts: temp})
    })
    .catch(err => console.log(err))

    Scroll(290,300);
  }
  render(){

    const {
      dataProducts
    } = this.state;

    const productsCon = (
      <Route
        children={({ location }) => {
          return(
            <ProductContainer
              location={location}
              dataProducts={dataProducts}
              showcaseHeader={'Search:' + decodeURI(this.props.location.search.substr(1))}
            />
          )
        }}
      />
    )

    const contentDisplay = !dataProducts.length ? <Segment id='loader-wrap'><Loader active size='massive'>Loading</Loader></Segment>:productsCon;

    return(
      <Grid as='section' textAlign='center'>
        <Grid.Column width={13}>
          {contentDisplay}
        </Grid.Column>
      </Grid>
    )
  }
}

export default SearchSite;
