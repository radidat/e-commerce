const existProduct=(cardItems, product)=>{ 
    
  if(Array.isArray(cardItems)){
    const  existProduct = cardItems.find(item =>item.id === product.id ); 
    return existProduct; 
  }
    
}

export const handleAddProduct=(cardItems, product)=>{
               
       const existProductData =  existProduct(cardItems, product);
      if(existProductData){
       return  cardItems.map(item =>{ 
            if( item.id ===product.id){
                return {...item, quantity: product.quantity}; 
            }else{
              return item; 
            }
           })} 
         if(Array.isArray(cardItems)){
          return[
            ...cardItems,
            product
        ]
       
         }
       
}
export const handleRemoveCardItem=(cardItems, product)=>{ 
    return cardItems.filter(cardItem => cardItem.id !== product.id)
}
export const  handleIncrimentCardItem=(cardItems, product)=>{
  const existProductData =  existProduct(cardItems, product);

          const quantityItem  =1;

         if(existProductData){ 
             return cardItems.map(cardItem =>
              cardItem.id ===product.id ? 
              {...cardItem, 
              quantity: cardItem.quantity+ quantityItem}
              :cardItem
             )
         }


}
export const handleReduceItem=(cardItems, product)=>{ 
  const existProductData =  existProduct(cardItems, product);

 if(existProductData.quantity ===1){ 
     return cardItems.filter(cardItem => cardItem.id !== product.id)
 }
 return  cardItems.map(cardItem =>
  cardItem.id ===product.id ? 
  {...cardItem, 
  quantity: cardItem.quantity-1}
  :cardItem
 )
}