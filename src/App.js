import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './_templates/Header';
import LoadContent from './_templates/LoadContent';
import Footer from './_templates/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return <BrowserRouter> 
            <Header />
            <Switch>
              <Route exact path="/" children={<LoadContent />} />
              <Route path="/:id" children={<LoadContent />} />
            </Switch>
            <Footer />
          </BrowserRouter>  
  }
}

export default App;
