import React,{useCallback} from 'react'; 
import { useDispatch } from 'react-redux';
import { incrimentItem, decrimentItem } from '../reduxConfig/products/products.actions';

const IncrimentProduct = ({product})=>{
  const dispatch = useDispatch();


    const incrimentProduct =useCallback((e)=>{
        e.preventDefault();
            dispatch(incrimentItem(product)); 
           
    },[product.quantity])
    const decrimentProduct =(e)=>{
        e.preventDefault()
         if(product.quantity ===0){ 
             return;
         }
 dispatch(decrimentItem(product));
          
    }
    return (
           <div>
        <button className='number-product' onClick={incrimentProduct}>+</button>
        <p style={{color: 'black'}}>{product.quantity}</p>
<button className='number-product' onClick={decrimentProduct}>-</button>
       </div> )
}

export default IncrimentProduct;