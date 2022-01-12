import React,{useEffect}from 'react'; 
import { db } from '../configFirebase/configFirebase';
import {ButtonOrange} from '../UI/Button';
import {useSelector,useDispatch} from 'react-redux';
import {fetchOtherDataProduct} from '../reduxConfig/products/products.actions';
import Pulse from 'react-reveal/Pulse';
const mapToState=({productsData})=>({

    suggestionProductData: productsData.suggestProducts, 
    product: productsData.product, 
    loadingSuggest: productsData.loadingSuggest,
})



function SuggestionProducts({product}) {

    const {suggestionProductData, loadingSuggest}= useSelector(mapToState);
       const dispatch =  useDispatch(); 
    useEffect(()=>{
      
            if(Object.entries(product).length > 0){ 
              
                dispatch(fetchOtherDataProduct(product.id))
            }
          console.log(loadingSuggest)
        
    },[product.id])
    return (

        <div>
            <h2 style={{textAlign:'center', marginTop:25, fontSize:35,fontWeight:'bold' }}>you may also like</h2>
            <div className='suggestion-Products-container'>  
            { loadingSuggest ? '...chargment'
              : 
            suggestionProductData.map(suggestProduct =>{
                return   <SuggestionProduct key={suggestProduct.id} suggestProduct={suggestProduct} />
                }) } 
        
      </div>
        </div>

    )
}

const  SuggestionProduct =({suggestProduct})=>{ 
     

    return (
        <>
        {suggestProduct && 
        <Pulse left>
<article className='suggestion-product'> 
           {suggestProduct.image && <img src={suggestProduct.image.desktop}></img> } 
            <div className='suggestion-product-body'>
            <h4>{suggestProduct.name}</h4>
            <ButtonOrange link={`/detailProduct/${suggestProduct.name}`} text='see product'/>
            </div>
              
        </article>
        </Pulse>}
        
        </>
    )
} 
export default SuggestionProducts
