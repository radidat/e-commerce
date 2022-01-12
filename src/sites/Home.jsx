import React from 'react'
import HeaderMain from '../components/components-home/HeaderMain'; 
import ProductsHome from '../components/components-home/ProductsHome';
import DetailProductHome from '../components/components-home/DetailProductHome';
import EcommercePresentation from '../components/components-home/EcommercePresentation';
import Footer from '../components/components-home/Footer';
import Pulse from 'react-reveal/Pulse'

function Home({categories}) {

 

    return (
        <div>
            <HeaderMain />
        <div className='product-home-container' >
        {categories && categories.map(categoryName =>{
           return <ProductsHome key={categoryName.id} categoryName={categoryName} /> 
        })}  
         </div>
         <DetailProductHome  />
         <Pulse>
         <EcommercePresentation/>
         </Pulse>
         <Footer/>
     </div>
    )
}



export default Home
