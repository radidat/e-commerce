import React,{useEffect, useState, useCallback} from 'react';
import {db} from '../configFirebase/configFirebase'
import {ButtonOrange} from '../UI/Button'
import SuggestionProducts from './SuggestionProducts';
import ProductsHome from './components-home/ProductsHome';
import EcommercePresentationGeneral from './EcommercePresentationGeneneral';
import FooterGeneral from './FooterGeneral';
import IncrimentProduct from '../UI/IncrimentProduct';
import Goback from '../UI/Goback';
import { useParams } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { fetchProductDataId, getProductAction, addItems} from '../reduxConfig/products/products.actions';
import Fade from 'react-reveal/Fade'
import Pulse from 'react-reveal/Pulse';
const mapToState=({productsData})=>({
    product: productsData.product, 
    gallery: productsData.gallery,
    cardItems: productsData.cardItems,
})

function DetailProduct({categories}){
        const{productName}= useParams(); 
         const dispatch = useDispatch();
        const {product, gallery,cardItems}= useSelector(mapToState);
        useEffect(()=>{
            dispatch(fetchProductDataId(productName));
        },[])

   console.log(product);

    const handleAddItems =()=>{
     if(product.quantity >= 1){
            dispatch(addItems(product))
         } 
    }
    return (
        <div>
          <Goback/>
          <Pulse>
          <article className='card-category-product flex'>
               {product.image &&  <img src={product.image.desktop } alt={product.name}></img>}
                <div className='card-category-body'>
               {product.new && <p className='new-product-category'> new Product</p>} 
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                 <p className='price'> ${product.price} </p>
                 <div className='incriment-product'>
                 <div>
                     <IncrimentProduct product={product}/>
                 </div>
                 <ButtonOrange onClick={handleAddItems} text= 'add product'>addProduct</ButtonOrange>
                 </div>
                 
                </div>
              

            </article>
        </Pulse>
          
            <div className='features-container'>
                <Pulse>
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
                </Pulse>
 
            </div>
   
            <ImagesProducts gallery={gallery} />
            <SuggestionProducts product={product}/>
            <div className='product-home-generale'>
                { categories && categories.map( categoryName=>{
             return <ProductsHome key={categoryName.id} categoryName={categoryName}/>
                })}
         
        
            </div>
           
            <div className='ecommerce-presentation-generale'>
         <Pulse>
          <EcommercePresentationGeneral/>
          </Pulse> 
         </div>
            <FooterGeneral/>
        </div>
    )
}

 const ImagesProducts=({gallery})=>{

    return (
        <div className='images-products-container'> 
        <Fade left>
        <img src={ gallery[0] ?gallery[0].desktop :''} className='images-products img-product-one'></img>
        </Fade>
        <Fade left>
        <img src={gallery[1] ? gallery[1].desktop:''} className='images-products img-product-two'></img>
        </Fade>
        <Fade right>
        <img src={gallery[2]? gallery[2].desktop:''}className='images-products img-product-three'></img>
        </Fade>
            
            
           
        </div>
    )
}

export default DetailProduct
