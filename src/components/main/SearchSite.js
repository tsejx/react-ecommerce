import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Grid, Segment, Loader } from 'semantic-ui-react';
import ProductContainer from './ProductContainer';
import Scroll from '../scroll/Scroll';
import axios from 'axios';
import 'assets/style/main.scss';

class SearchSite extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataProducts: [],
      isNotFound: false
    }
  }

  componentDidMount() {

    const searchVal = this.props.location.search.substr(1);

    const regSearch = new RegExp(searchVal,'gim');

    axios
    .get('/src/data/productData/database.json')
    .then(res => {

      const temp = new Array;

      res.data.forEach(function(item,index){
        if (regSearch.test(item.name)) temp.push(item);
      })

      if (!temp.length) {this.setState({isNotFound: true})}

      temp.sort(function(){ return 0.5 - Math.random() })

      this.setState({dataProducts: temp})

    })
    .catch(err => console.log(err))

    Scroll(290,300);
  }

  render(){

    const {
      dataProducts,
      isNotFound
    } = this.state;

    const searchVal = decodeURI(this.props.location.search.substr(1));

    const productsCon = (
      <Route
        children={({ location }) => {
          return(
            <ProductContainer
              location={location}
              dataProducts={dataProducts}
              showcaseHeader={'SEARCH RESULTS FOR : "' + searchVal + '"'}
            />
          )
        }}
      />
    )

    let contentDisplay = null;

    if (isNotFound) {
      contentDisplay = <Segment className='not-found-wrap'><h2>SORRY, WE DID NOT FIND ANY RESULT FOR YOUR SEARCH "{searchVal}".</h2><p>Please check the spelling or try again with a less specific term</p></Segment>
    }else if (!dataProducts.length){
      contentDisplay = (<Segment className='loader-wrap'><Loader active size='massive'>Loading</Loader></Segment>)
    }else {
      contentDisplay = productsCon;
    }

    return(
      <Grid as='section' textAlign='center'>
        <Grid.Column width={13} id='search-wrap'>
          {contentDisplay}
        </Grid.Column>
      </Grid>
    )
  }
}

export default SearchSite;
