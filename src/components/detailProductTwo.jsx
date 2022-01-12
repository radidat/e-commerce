import React,{useEffect, useState} from 'react';
import {ButtonOrange} from '../UI/Button'
import ProductsHome from './components-home/ProductsHome';
import EcommercePresentationGeneral from './EcommercePresentationGeneneral';
import SuggestionProducts from './SuggestionProducts';
import FooterGeneral from './FooterGeneral';
import IncrimentProduct from '../UI/IncrimentProduct';
import Goback from '../UI/Goback';
import { useParams } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { fetchProductDataId, getProductAction } from '../reduxConfig/products/products.actions';


const mapToState=({productsData})=>({
    product: productsData.product
})


function DetailProductTwo({categories}) {
 
    const{productName}= useParams(); 
    const dispatch = useDispatch();
   const {product}= useSelector(mapToState);
   useEffect(()=>{
       dispatch(fetchProductDataId(productName));
   },[])

return (
   <div>
     <Goback/>
      <article className='card-category-product flex'>
          {product.image &&  <img src={product.image.desktop } alt={product.name}></img>}
           <div className='card-category-body'>
          {product.new && <p className='new-product-category'> new Product</p>} 
           <h4>{product.name}</h4>
           <p>{product.description}</p>
            <p className='price'> ${product.price} </p>
            <div className='incriment-product'>
            <div>
  <p style={{color: 'black'}}>{product.quantity}</p>
       
           <button className='number-product' onClick={IncrimentProduct}>+</button>
 <button className='number-product'>-</button>
  </div>
            <ButtonOrange text= 'add product'></ButtonOrange>
            </div>
            
           </div>
         

       </article>
     
       <div className='features-container'>
       <div className='features'>
           <h4>features</h4>
       </div>
       <div className='in-box'>
           <h4>In the box</h4>
           
    <div  className="products-box">
               <p className='quantity-product-box'></p>
               <p>{product.features}</p>
           </div>
          
       </div>
       </div>

       <ImagesProducts />
       <SuggestionProducts product={product}/>
       <div className='product-home-generale'>
           { categories && categories.map( categoryName=>{
        return <ProductsHome key={categoryName.id} categoryName={categoryName}/>
           })}
    
   
       </div>
      
       <div className='ecommerce-presentation-generale'>
    <EcommercePresentationGeneral/>
    </div>
       <FooterGeneral/>
   </div>
)
}

const ImagesProducts=()=>{

   return (
       <div className='images-products-container'>
           <img src='' className='images-products img-product-one'></img>
           <img src='' className='images-products img-product-two'></img>
           <img src='' className='images-products img-product-three'></img>
       </div>
   )
}

export default DetailProductTwo
