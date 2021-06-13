import React, {Component} from 'react';
import {Navbar,NavbarBrand,Container} from 'react-bootstrap';

class Footer extends Component{
	render(){
		return 	<div className="fixed-bottom">  
		            <Navbar color="dark">
		                <Container>
		                    <NavbarBrand>Footer</NavbarBrand>
		                </Container>
		            </Navbar>
		        </div>;
	}
}

export default Footer;