import React, {useEffect, useState}from 'react'
import CategoryProduct from '../components/category/CategoryProduct';

import ProductsHome from '../components/components-home/ProductsHome';
import EcommercePresentationGeneral from '../components/EcommercePresentationGeneneral';
import FooterGeneral from '../components/FooterGeneral'
import Pulse from 'react-reveal/Pulse';
function Category({categories}) {


    return (
        <div>    
 <CategoryProduct />
 <div className='product-home-generale' >
       
 {categories && categories.map((categoryName, index)=>{
           return <ProductsHome  key={index} categoryName={categoryName}/>
        } )}
         </div>
         <div className='ecommerce-presentation-generale'>
             <Pulse>
             <EcommercePresentationGeneral/>
             </Pulse>
        
         </div>

 <FooterGeneral></FooterGeneral>
        </div>
    )
}

export default Category
