import React from 'react'
import FooterGeneral from '../components/FooterGeneral';
import Checkout from '../components/components-checkout/Checkout';
import Summary from '../components/components-checkout/Summary';
import Goback from '../UI/Goback';
import PaymentContainer from '../components/payment/PaymentContainer';
function CheckoutPage() {
    return (
        <div className='checkoutPage-container'>
            <Goback/>
            <div className='checkoutPage-responsive'>
                <PaymentContainer>
                <Checkout/>
                </PaymentContainer>
            <Summary/>
            </div>
            
             <FooterGeneral/>
        </div>
    )
}

export default CheckoutPage
