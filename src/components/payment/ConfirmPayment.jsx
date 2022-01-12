import React from 'react'; 
import PaymentContainer from './PaymentContainer';
import { useDispatch } from 'react-redux';
import {cardItemsInitialize} from '../../reduxConfig/products/products.actions';
import { useHistory } from 'react-router-dom';
import { ButtonBlack } from '../../UI/Button';
const ConfirmPayment =()=>{

 const dispatch = useDispatch();
 const  history = useHistory()

   const handleClick =(e)=>{
       e.preventDefault();
        dispatch(cardItemsInitialize()); 
        history.push('/')
          
   }
    return(<PaymentContainer>
              <div className='confirmPaymentContainer'>
                    <h5>le paiement a été accepté clique sur le bouton pour revenir à la page d'acceuil.</h5>
                    <button type='button' className='btn-bg-color-black' style={{outline:'none', border:'none'}} onClick={handleClick} >retourner à la boutique</button>
              </div>
    </PaymentContainer>)

    }
export default ConfirmPayment;