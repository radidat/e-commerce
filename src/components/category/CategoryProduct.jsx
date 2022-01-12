import React,{useEffect} from 'react'
import CardCategory from './CardCategory'
import HeaderCategory from './HeaderCategory'
import {useParams} from 'react-router-dom'; 
import { fetchCategoryAction} from '../../reduxConfig/products/products.actions'
import {useSelector, useDispatch} from 'react-redux'; 
const mapToState =({productsData})=>({
    categoryData : productsData.categoryData
})
function CategoryProduct() {
    const dispatch = useDispatch();
    const {categoryData} = useSelector(mapToState);
   const{category} = useParams(); 
  console.log(categoryData);
   useEffect(()=>{ 
           if(category){
              dispatch(fetchCategoryAction(category))
           }
        
   },[category])

    return (
        <div>
            <HeaderCategory />
            {categoryData && categoryData.map(product =>{
               return  <CardCategory key={product.name} product ={product} />
            })}
        
        </div>
    )
}

export default CategoryProduct
