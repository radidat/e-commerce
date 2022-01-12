import React, {useEffect}from 'react'; 
import { Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './sites/Home';
import Category from './sites/Category';
import CheckoutPage from './sites/CheckoutPage';
import DetailProduct from './components/DetailProduct';
import DetailProductTwo from './components/detailProductTwo';
import { useSelector, useDispatch} from 'react-redux'; 
import SignIn from './components/connexion/SignIn';
import SignUp from './components/connexion/SignUp';
import ForgotPassword from './components/connexion/ForgotPassword';
import { fetchProductsActions } from './reduxConfig/products/products.actions';
import { checkUserSession } from './reduxConfig/users/users.actions';
import { uniqCategory } from './utils/utils';
import Container from './components/Container';
import PrivateRoute from './components/PrivateRoute'; 
import ConfirmPayment from './components/payment/ConfirmPayment';
/*
-ajouter un loader sur le systeme de connexion et d'inscription 
-ajouter un systeme de paiment à l'application 
*/ 
const mapToState=({productsData})=>{

  return{
products: productsData.products, 
  }
}
function App() {

  const dispatch = useDispatch()

     useEffect(()=>{ 
    
       dispatch(checkUserSession())
     },[])
 
  useEffect(()=>{
      dispatch(fetchProductsActions());
  },[])

    
  const {products} = useSelector(mapToState);
  const  productsCategories = products ? products :'';
const categories = uniqCategory( productsCategories)
  return (
    <div className="App">
   <Switch>
     <Route exact path='/'children ={
       <Container>
<Home categories={categories} />
       </Container>
     }/>

     <Route exact path='/category/:category'children ={
      <Container>
        <Category categories={categories} />
      </Container>
     }/>

     <PrivateRoute exact path='/checkoutPage' Component={CheckoutPage}/>
     <Route  exact path='/detailProduct/:productName'children ={
     <Container>
<DetailProduct categories={categories}/>
     </Container>
     }/>

     <Route exact  path='/detailProducttwo/:productName'children ={
<Container>
<DetailProductTwo categories={categories}/>
</Container>
     }/>
     <Route exact path='/signin' children={<SignIn/>}></Route>
     <Route exact path='/signUp' children={<SignUp/>}></Route>
     <Route exact path='/forgotPassword' children={<ForgotPassword/>}></Route>
     <Route exact path='/confirmPayment' children={<ConfirmPayment/>}></Route>

   </Switch>

    </div>
  );
}

export default App;
