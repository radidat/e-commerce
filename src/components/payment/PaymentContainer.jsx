import React from 'react'; 
import { Elements} from '@stripe/react-stripe-js'; 
import { loadStripe } from '@stripe/stripe-js';


const stripePromise  = loadStripe('pk_test_51JT929At2KnlK2OKvSoVIcRsZpRwkPIJjZzr2XNbVEzplryG7R90JXmHN7SreQtng0jBzaFrdUK5LA2noRr0Edoi006INN5kuM');
const PaymentContainer = ({children})=>{ 

    

    return(<Elements stripe={stripePromise} >
             {children}
    </Elements>
    )

}

export default PaymentContainer; 