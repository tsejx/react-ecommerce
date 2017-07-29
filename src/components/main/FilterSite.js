import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import SidebarMenu from '../nav/SidebarMenu';
import ProductContainer from './ProductContainer';
import Scroll from '../scroll/Scroll';
import axios from 'axios';
import 'assets/style/main.scss';

const CategoryBanner = (props) => (
  <img src={require('../../assets/img'+ props.bannerPath +'Banner.jpg')}/>
)

class FilterSite extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataProducts: [],
      nameProList: ''
    }
    this.handleProList = this.handleProList.bind(this);
    this.handleGetData = this.handleGetData.bind(this);
  }

  componentDidMount() {
    const arrSitePath = this.props.location.pathname.match(/\/[a-z\-]*/g);

    if (arrSitePath[1]) {
      this.handleGetData(arrSitePath.join(''));
    }

    Scroll(290,300);
  }

  handleGetData(path){
    axios
    .get('/src/data/productData' + path + '.json')
    .then(res => this.setState({dataProducts: res.data}))
    .catch(err => console.log(err))
  }

  handleProList(path,nameProList){
    this.handleGetData(path);
    this.setState({nameProList:nameProList.toUpperCase()})
  }

  render() {

    const {
      handleProList
    } = this;

    const {
      dataProducts,
      nameProList
    } = this.state;

    const currentPath = this.props.match.url;

    return(
      <Grid id='main-wrap' textAlign='center'>
        <Grid.Column as='aside' width={3} textAlign='left'>
          <Route
            children={({ match, location }) => {
              return(
                <SidebarMenu match={match} location={location} handleProList={handleProList}/>
              )
            }}
          />
        </Grid.Column>
        <Grid.Column as='section' width={10}>
          <Switch>
            <Route
              exact
              path={currentPath + '/*' }
              children={({ match, location }) => {
                return(
                  <ProductContainer
                    location={location}
                    dataProducts={dataProducts}
                    showcaseHeader={nameProList}
                  />
                )
              }}
            />
            <Route
              exact
              path={currentPath}
              children={() => {
                return(
                  <CategoryBanner bannerPath={currentPath}/>
                )
              }}/>
          </Switch>
        </Grid.Column>
      </Grid>
    )
  }
}

export default FilterSite;