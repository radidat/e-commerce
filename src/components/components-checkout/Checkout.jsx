import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import React, {useState} from "react";
import Fade from 'react-reveal/Fade';
import { ButtonOrange } from "../../UI/Button";
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectCardTotal} from '../../reduxConfig/products/products.selectors'
import axios from 'axios';
const apiInstance = axios.create({
  baseURL:'https://us-central1-ecommerce-audiophile.cloudfunctions.net/api'
});
  const mapToState = createStructuredSelector({
     total : selectCardTotal
  })
function Checkout() {
 const [dataPayment, setDataPayment] = useState({ 
   name:'',
   email_adress:'',
   phone_number:'',
   city:'',
   adress_postal:'',
   country:'',
   postal_code:''
 }); 
 const {total } =  useSelector(mapToState)
 const elements = useElements(); 
 const stripe = useStripe();
 const history = useHistory();

  const handleChange=(e)=>{
      e.preventDefault(); 
      const name = e.target.name;
    const value = e.target.value
      setDataPayment({...dataPayment, [name]:value})
  }

  const handleConfirmPayment=(e)=>{ 
    e.preventDefault();
  
    const cardElement = elements.getElement(CardElement); 
    if(!stripe || !elements){ 
        return;
    }

   /* const billingDetails ={
      name: dataPayment.name, 
      email:dataPayment.email_adress, 
      phone: dataPayment.phone_number, 
      address:{ 
        city:dataPayment.city, 
        country:dataPayment.country, 
        line1:dataPayment.adress_postal
      }
    }*/

            apiInstance.post('/payments/create', { 
              amount: total *100
          }).then(({data: clientSecret})=>{
            console.log(clientSecret)
              stripe.createPaymentMethod({
                  type:'card', 
                  card: cardElement,
              }).then(({paymentMethod})=>{
                  stripe.confirmCardPayment(clientSecret, {
                    payment_method: paymentMethod.id
               }).then(({paymentIntent})=>{ 
                 history.push('/confirmPayment');
               })
  
                
              })
                  })
   
  }
const CARD_STYLES = {
  style: {
    base:{
      border: '5px solid red', 
    }
  }, 
  invalid: {
    color: '#9e2146',
  }
}
  return (
    <Fade bottom>
<div className= 'checkout-container'>
   
   <h1>Checkout</h1>
   <form onSubmit={handleConfirmPayment}>
   <div className='container-inputs'>
     <h6>billing details</h6>
     <div className ='row'>
       <div className="mb-3 col-12 col-md-6 ">
         <label htmlFor="exampleFormControlInput1" className="form-label">
           Name
         </label>
         <input type="text" name='name' onChange={handleChange} className="form-control input-checkout" />
       </div>
       <div className="mb-3 col-12 col-md-6">
         <label htmlFor="exampleFormControlInput1" className="form-label">
           Email address
         </label>
         <input type="email" name ='email_adress' onChange={handleChange} className="form-control input-checkout" />
       </div>
       <div className="mb-3 col-12 col-md-6">
         <label for="exampleFormControlInput1" className="form-label">
           phone number
         </label>
         <input type="tel" name='phone_number' onChange={handleChange} className="form-control input-checkout" />
       </div>
     </div>
     
   </div>
   
   <div className='container-inputs'>
     <h6>shipping info</h6>
     <div className ='row'>
       <div className="mb-3 col-md-12">
         <label htmlFor="exampleFormControlInput1" className="form-label">
           your adress
         </label>
         <input type="text" name='adress_postal' onChange={handleChange} className="form-control input-checkout" />
       </div>
       <div className="mb-3 col-md-6">
         <label htmlFor="exampleFormControlInput1" className="form-label">
           postal code
         </label>
         <input type="number" name='postal_code' onChange={handleChange} className="form-control input-checkout" />
       </div>
       <div className="mb-3 col-md-6">
         <label htmlFor="exampleFormControlInput1" className="form-label">
           city
         </label>
         <input type="text" name='city'  onChange={handleChange}className="form-control input-checkout" />
       </div>
       <div className="mb-3 col-md-6">
         <label htmlFor="exampleFormControlInput1" className="form-label">
           country
         </label>
         <input type="text" name='country'  onChange={handleChange}className="form-control input-checkout" />
       </div>
     </div>
     
   </div>
   <div className='container-inputs'>
    <h4 style={{color:'#D87D4A', textTransform:'uppercase'}}>Payment details</h4> 
     <div className =''>
     <h6 style={{color:'black', textAlign: 'left'}}>payment card</h6>
       <div style={{border:'1px solid rgba(0, 0, 0, 0.3)', borderRadius:'5px ',padding:'15px 0'}}> 
         <CardElement options={CARD_STYLES}/>
       </div>

     </div>
     
   </div>
   <button className='btn-bg-color-orange' style={{ margin: '25px 0px 25px 250px'}}type="submit" disabled={!stripe}>Confirm payment</button>
   </form>
  
 </div>
  </Fade>
  );
}

export default Checkout;
