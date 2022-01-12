

export const uniqCategory = (products)=>{
    const categories =[]; 

    if( Array.isArray(products)){
        products.map(product=>{
            if(categories.some(productAdded => productAdded.category === product.category)){
                return;
            }else{
               return categories.push(product)
            }
       })
    }

return categories; 
}

