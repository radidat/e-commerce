import React, {useState} from 'react'
import ModalValidCommande from './ModalValidCommande';
import {useSelector, useDispatch} from 'react-redux';
import {selectCardTotal} from '../../reduxConfig/products/products.selectors'
const mapToState =({productsData})=>({

    cardItems: productsData.cardItems
})

function Summary() {

     const {cardItems} = useSelector(mapToState)
    return (
        <div className='summary'>
            <h4>Summary</h4>
            <div className='summary-products-container'>
            {cardItems && cardItems.map(product =>{
              return <SummaryProduct product={product}/>
            })}

            </div>
            <CountProducts/>
        </div>
    )
}

function SummaryProduct({product}){ 

    return(
          <>
          { 
          product &&
          <div className='shopping-check_summary'>
          <img src={product.image.desktop}></img> 
            <div>
                <h6>{product.name}</h6>
                <p>${product.price}</p>
          </div>
         <p>x{product.quantity}</p> 
  </div>
          }   
</>
    )
}
function CountProducts(){
    const countItems = useSelector(selectCardTotal); 
      const shipping = 50 ;
       const vat = 1.079; 
       const grandTotal = countItems +  shipping
    return(
        <div>
            <div className='count-products'>
                <h6>toal</h6>
                <p>$ {countItems}</p>
            </div>
            <div className='count-products'>
                <h6>shipping</h6>
                <p>${50}</p>
            </div>
            <div className='count-products'>
                <h6>VAT(included)</h6>
                <p>${vat}</p>
            </div>
            <div className='count-products'>
                <h6>grand total</h6>
                <p className ='count-products-total'>$ {countItems > 0? grandTotal :'0'}</p>
            </div>
        </div>
    )
}
export default Summary
