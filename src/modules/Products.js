import React, {Component} from 'react';
import {Table, Button} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import $ from 'jquery';

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

	handleDelete(id){
		this.props.axios
            .delete('dropshipping/products?id='+id)
            .then((res) => {
            	this.props.toast.info(res.data.msg);
                this.getProducts();
            })
            .catch((err) => {
            	
            	let error_txt = "";
            	
            	if(err.response.data)
            	{
            		$.each(err.response.data, function(index, value){
            			error_txt += index+' : '+value+'\n';
            		});
				}
            	
            	if(error_txt.length > 0)
            	{
            		this.props.toast.dark(error_txt);
            	}	
            	else
            	{
            		this.props.toast.dark('Something Went Wrong');
            	}
            });
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
											<Icon.Trash className="text-danger" onClick={() => this.handleDelete(product.id)}/>
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