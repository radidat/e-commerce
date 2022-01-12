import React from 'react'
import {Link} from 'react-router-dom';
import Pulse from 'react-reveal/Pulse';

function ProductsHome({categoryName}) {
    
   
  return (
           <div className='product-home-card'>
           {
           categoryName && (
                <Pulse>
             <div><img src={categoryName.image.desktop} style={{width:150, height:150}}className='product-home-img' alt={categoryName.name}></img>
                 <h4>{categoryName.name}</h4>
                <Link to={`/category/${categoryName.category}`} className='product-home-shop'>
                shop<img src='/right-chevron.svg' className='chevron-shop'></img></Link>
                </div>
                </Pulse>
            
          )
           } 
                </div>
         )

}

export default ProductsHome
