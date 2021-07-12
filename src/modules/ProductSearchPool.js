import React, {Component} from 'react';
import {Table, Button, Form, Row, Col, FormControl} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import $ from 'jquery';

class ProductSearchPool extends Component{
	
	constructor(props) {
        super(props);
    }

    state = {
	    pools : [],
	}

	componentDidMount() {
		this.getPools(); 
	}

	getPools(){
		let data;

	    this.props.axios.get('dropshipping/product-pool')
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

  		var data = new FormData($('#product-pool-form')[0])
  		
        this.props.axios
            .post('dropshipping/product-pool', data)
            .then((res) => {
            	this.props.toast.info(res.data.msg);
                this.reset_form($('#product-pool-form'));
                this.getPools();
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
    };

    reset_form = (el) =>{
    	$(el).find('input, select, textarea').each(function(){
    		
    		if($(this).is('input') || $(this).is('textarea'))
    		{
    			$(this).val('');
    		}
    		else if($(this).is('select'))
    		{
    			let sel_val = $(this).find('option:first').val();
    			$(this).val(sel_val);
    		}
    	});
    }

	render(){
		return 	<>
					<Form onSubmit={this.handleSubmit} id="product-pool-form">
						<Row className="mb-2">
							<Col>
								<div class="form-floating">
								  <select class="form-control" name="store_id" placeholder="Select Store">
								  		if (this.props.configs.stores) {
								    		this.props.configs.stores.map((value) =>(
							    			    <option value={value.id}>{value.store_name}</option>
									    		)
									    	)
								    	}
								  </select>
								  <label>Store</label>
								</div>
							</Col>
							<Col>
								<div class="form-floating">
								  <select class="form-control" name="pool_type" placeholder="Select Pool Type">
								  		if (this.props.configs.pool_type) {
								  			this.props.configs.pool_type.map((value) =>(
							    			    <option value={value[0]}>{value[1]}</option>
									    		)
									    	)
								    	}
								  </select>
								  <label>Pool Type</label>
								</div>
							</Col>
							<Col>
								<div class="form-floating">
								  <textarea class="form-control" name="pool_info" placeholder="Pool Info"></textarea>
								  <label>Pool Info</label>
								</div>
							</Col>
							<Col>
								<Button type="submit" className="mt-2">  
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
				  	  	{ 
				  	  		(this.state.pools.length > 0) 
				  	  		?
				  	  			this.state.pools.map((pool, id) => (
								    <tr>
								      <td>{ pool.store_name }</td>
								      <td>{ pool.pool_type }</td>
								      <td>{ pool.pool_info }</td>
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


export default ProductSearchPool;