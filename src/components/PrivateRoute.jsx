import React from 'react'; 
import {Route, Redirect} from 'react-router-dom';
import { useSelector} from 'react-redux'
import Container from './Container';
const mapToState = ({users})=>{ 

    return{
        currentUser: users.currentUser
    }
}


const PrivateRoute = ({Component, ...props})=>{

      const{ currentUser}  = useSelector(mapToState); 

    return( currentUser ? <Route children={(prop)=>{
        return( <Container>
            {<Component {...prop}/>}
                </Container> )
    }} {...props}/> :<Redirect to='/signin'/> )
}

export default PrivateRoute;