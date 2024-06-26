import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Navbar, Nav, NavDropdown, Form, FormControl} from 'react-bootstrap';

class Header extends Component{
	render(){
		return <header>
					<Navbar bg="light" expand="lg">
					  <Navbar.Brand as={Link} to="/">Dropship</Navbar.Brand>
					  <Navbar.Toggle aria-controls="basic-navbar-nav" />
					  <Navbar.Collapse id="basic-navbar-nav">
					    <Nav className="mr-auto">
					      	<Nav.Link as={Link} to="/products">Products</Nav.Link>
					      	<Nav.Link as={Link} to="/product-search-pool">Product Search Pool</Nav.Link>
					      	{/*} 
						      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
						        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
						        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
						        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
						        <NavDropdown.Divider />
						        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						      </NavDropdown> 
					  		{*/}
					    </Nav>
					    
					    {/*}
						    <Form inline>
						      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
						      <Button variant="outline-success">Search</Button>
						    </Form>
					    {*/}
					  </Navbar.Collapse>
					</Navbar>
				</header>;
	}
}

export default Header;