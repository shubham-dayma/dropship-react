import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './_templates/Header';
import LoadContent from './_templates/LoadContent';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import * as config from './config';



class App extends Component{
  constructor(props){
    super(props);
    axios.defaults.baseURL = config.ALIAS.apiUrl;
  }

  state = {
      configs : {'stores':[], 'pool_type':[]}
  }

  componentDidMount() {
      let data;
      
      axios.get('dropshipping/configs')
      .then(res => {
        data = res.data;
        this.setState({
          configs : data  
        });
      })
      .catch(err => {})
  }

  render(){
    return <BrowserRouter> 
            <Header />
            <Switch>
              <Route exact path="/" children={<LoadContent />} />
              <Route path="/:id" children={<LoadContent toast={toast} axios={axios} configs={this.state.configs}/>}/>
            </Switch>
            <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>  
          </BrowserRouter>
  }
}

export default App;
