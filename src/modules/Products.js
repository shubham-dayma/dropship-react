import React, {Component} from 'react';
import {Table, Button} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

class Products extends Component{
	constructor(props) {
        super(props);
    }

    state = {
	    products : [],
	}

	componentDidMount() {
		this.getProducts(); 
	}

	getProducts(){
		let data;

	    this.props.axios.get('dropshipping/products')
	    .then(res => {
	      data = res.data;
	      this.setState({
	        products : data  
	      });
	    })
	    .catch(err => {})
	}
	
	render(){
		return 	<>
					<Table striped bordered hover responsive>
					  <thead>
					    <tr>
					      <th>Title</th>
					      <th>SKU</th>
					      <th>Cost Price</th>
					      <th>Product Id</th>
					      <th>Action</th>
					    </tr>
					  </thead>
					  <tbody>
					    { 
				  	  		(this.state.products.length > 0) 
				  	  		?
				  	  			this.state.products.map((product, id) => (
								    <tr>
								      	<td>{ product.title }</td>
								      	<td>
								      		<a href={(product.parent_store_type == 'amazon_ca') ? 'https://amazon.ca/dp/'+product.parent_store_reference : ''} target="_blank">
								      			{ product.sku }
								      		</a>
								      	</td>
								      	<td>{ product.cost_price }</td>
								      	<td>
								      		{
									      		(product.barcode.length > 0)
									      		?
									      			product.barcode+'\n ('+product.barcode_type+')'
									      		:
									      			''
								      		}
								      	</td>
								      	<td>
											<Icon.Trash className="text-danger"/>
								      	</td>
								    </tr>
							    ))
							:   
								<tr>
							      <td colspan="100%" align="center">No Records Found.</td>
							    </tr>
      					}
					  </tbody>
					</Table>
				</>;
	}
}

export default Products;