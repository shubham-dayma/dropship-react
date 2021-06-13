import React, {Component} from 'react';
import {Table, Button} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

class Products extends Component{
	
	render(){
		return 	<>
					<Button className="my-3 pull-right">  
						<Icon.ArrowRight />
					</Button>
					<Table striped bordered hover responsive>
					  <thead>
					    <tr>
					      <th>#</th>
					      <th>First Name</th>
					      <th>Last Name</th>
					      <th>Username</th>
					    </tr>
					  </thead>
					  <tbody>
					    <tr>
					      <td>1</td>
					      <td>Mark</td>
					      <td>Otto</td>
					      <td>@mdo</td>
					    </tr>
					    <tr>
					      <td>2</td>
					      <td>Jacob</td>
					      <td>Thornton</td>
					      <td>@fat</td>
					    </tr>
					    <tr>
					      <td>3</td>
					      <td colSpan="2">Larry the Bird</td>
					      <td>@twitter</td>
					    </tr>
					  </tbody>
					</Table>
				</>;
	}
}

export default Products;