import {productsTypes} from './products.type'; 



export  const fetchProductsActions= ()=>({
    type: productsTypes.FETCH_PRODUCTS_DATA
})
export  const getProductsActions= (products)=>({
    type: productsTypes.SET_PRODUCTS_DATA,
    payload: products
    
})

export const fetchCategoryAction=(categoryName)=>({
    type:productsTypes.FETCH_CATEGORY_DATA, 
    payload: categoryName
})
 export const  getCategoryAction=(categoryData)=>({
     type:productsTypes.SET_CATEGORY_DATA, 
     payload: categoryData
 })


 export const fetchProductDataId =(productID)=>({
     type:productsTypes.FETCH_PRODUCT_DATA, 
     payload:productID
 })
 export const getProductAction=(productData)=>({
     type:productsTypes.SET_PRODUCT_DATA, 
     payload: productData
 })

 export const fetchOtherDataProduct=(productID)=>({
     type: productsTypes.FETCH_OTHER_DATA_PRODUCT, 
     payload:productID
 })
 export const getSuggestionProducts=(productsSuggestionData)=>({
    type: productsTypes.SET_SUGGEST_PRODUCT_DATA, 
    payload: productsSuggestionData

})
export const getGallery=(gallery)=>({
    type: productsTypes.SET_GALLERY_DATA, 
    payload: gallery

})

export const incrimentItem=(product)=>({
    type:productsTypes.INCRIMENT_PRODUCT,
    payload:product
})
  export const decrimentItem=(product)=>({
  type: productsTypes.DECRIMENT_PRODUCT,
   payload:product
 })
export const addItems=(product)=>({
    type:productsTypes.ADD_ITEMS,
    payload: product
})

  export const incrimentCardItem=(product)=>({
  type: productsTypes.INCRIMENT_CARD_ITEM,
   payload:product
 })
export const decrimentCardItem=(product)=>({
    type:productsTypes.DECRIEMENT_CARD_ITEM,
    payload: product
})
export const removeCardItem=(product)=>({
    type:productsTypes.REMOVE_CARD_ITEM,
    payload:product
})
export const cardItemsInitialize = ()=>({
    type: productsTypes.INITIALIZE_CARD_ITEMS
})