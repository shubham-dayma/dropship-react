import {useParams} from "react-router-dom";
import * as routes from './../routes';
import {Container} from 'react-bootstrap';
import Dashboard from './../modules/Dashboard';

function LoadContent() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let {id} = useParams();
  
  const Component = routes.COMPONENTS[id] == undefined ? Dashboard : routes.COMPONENTS[id];
  
  return <Container className="mt-3"> 
  			<Component />
  		</Container>;
}

export default LoadContent;