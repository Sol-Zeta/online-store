import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList/ProductList.js'
import PageContext from './contexts/pageContext.js'
import FooterButtons from './components/FooterButtons/FooterButtons.js'
import ProductDetail from './components/ProductDetail/ProductDetail.js'
import Header from './components/Header/Header.js'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Product from './components/Product/Product';

class App extends React.Component {
  constructor(){
    super()
    this.state ={
      Page: 0
    }
    this.nextPage = this.nextPage.bind(this)
    this.prevPage = this.prevPage.bind(this)
  }

  nextPage(){
    if(this.state.Page < 3){
      this.setState({
        ...this.state,
        Page : this.state.Page + 1
      })
    }
  }

  prevPage(){
    if(this.state.Page > 0){
      this.setState({
        ...this.state,
        Page : this.state.Page - 1
      })
    }
  }

  render(){
    return (
      <div className="App">
        <Router>
        
        <PageContext.Provider value={{Page: this.state.Page, nextPage: this.nextPage, prevPage: this.prevPage}}>
          <Header />
          <Switch>
              <Route exact path="/">
                <ProductList Page={this.state.Page}/>
                <FooterButtons/>
              </Route>
              <Route path="/prodDetail/:id" component={ProductDetail}/>
                {/* <ProductDetail />
              </Route> */}
            </Switch>
          
        </PageContext.Provider>
        </Router>
      </div>
    );
  }
 
}

export default App;
