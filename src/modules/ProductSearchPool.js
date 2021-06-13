import React, {Component} from 'react';
import {Table, Button, Form, Row, Col, FormControl} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import axios from 'axios';
import * as config from './../config';
import FloatingLabel from "react-bootstrap-floating-label";
import $ from 'jquery'; 

class ProductSearchPool extends Component{
	
	state = {
	    pools : [],
	}

	componentDidMount() {
	    let data;

	    axios.defaults.baseURL = config.ALIAS.apiUrl;

	    axios.get('dropshipping/product-pool')
	    .then(res => {
	      data = res.data;
	      this.setState({
	        pools : data  
	      });
	    })
	    .catch(err => {})
	}

	handleSubmit = (e) => {
        e.preventDefault();
  		
  		var data = new FormData($('#product-pool-forms'));

        axios
            .post(e.target.action, data)
            .then((res) => {
                this.setState({
                    pool_info: "",
                    pool_type: "",
                    store_id: "",
                });
            })
            .catch((err) => {});
    };

	render(){
		return 	<>
					<Form onSubmit={this.handleSubmit} action="/dropshipping/product-pool" id="product-pool-form">
						<Row>
							<Col>
								<FloatingLabel label="Store" className="mb-3">
								    <Form.Control type="text" placeholder="Store" name="store_id"/>
								</FloatingLabel>
							</Col>
							<Col>
								<FloatingLabel controlId="floatingPoolType" label="Pool Type">
								    <Form.Control type="text" placeholder="Pool Type" name="pool_type"/>
								</FloatingLabel>
							</Col>
							<Col>
								<FloatingLabel controlId="floatingPoolInfo" label="Pool Info">
								    <Form.Control as="textarea" placeholder="Pool Info" name="pool_info"/>
								</FloatingLabel>
							</Col>
							<Col>
								<Button type="submit">  
									<Icon.Save />
								</Button>
							</Col>
						</Row>
					</Form>
					
					<Table striped bordered hover responsive>
					  <thead>
					    <tr>
					      <th>Store</th>
					      <th>Pool Type</th>
					      <th>Pool Info</th>
					    </tr>
					  </thead>
					  <tbody>
					  	{this.state.pools.map((pool, id) => (
						    <tr>
						      <td>{ pool.store_name }</td>
						      <td>{ pool.pool_type }</td>
						      <td>{ pool.pool_info }</td>
						    </tr>
						    )
      					)}
					  </tbody>
					</Table>
				</>;
	}
}

export default ProductSearchPool;