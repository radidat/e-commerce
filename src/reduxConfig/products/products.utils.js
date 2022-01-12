import {db} from '../../configFirebase/configFirebase'; 


export const getAllProducts = ()=>{ 

    return new Promise((resolve, reject)=>{ 

   db.collection('audiophile').get().then(querySnapshot =>{ 
           const dataProducts = []; 
             querySnapshot.forEach( doc =>{
                 if(doc.exists){ 
                 dataProducts.push({ id: doc.id, ...doc.data()})
             }
      })
      resolve(dataProducts);
   }).catch( err =>{ 
       reject({message: err.message})
   })
})
}
export const getProductData =async (productID)=>{ 

         const response = await db.collection('audiophile').where('name', '==', productID).get(); 
         return response;
}
export  const getCategory= async (categoryName)=>{ 

       const response  = await db.collection('audiophile').where('category', '==',categoryName).get(); 
        return response;
}
export const getDataSuggestion = (productID)=>{ 

    return new Promise((resolve, reject)=>{ 

   db.collection('audiophile').doc(productID).collection('others').get().then(querySnapshot =>{ 
           const dataProduct = []; 
             querySnapshot.forEach( doc =>{
                 if(doc.exists){ 
                 dataProduct.push({ id: doc.id, ...doc.data() })
             }
      })
      resolve(dataProduct);
   }).catch( err =>{ 
       reject({message: err.message})
   })
})
}
export const getDataGallery = (productID)=>{ 

    return new Promise((resolve, reject)=>{ 

   db.collection('audiophile').doc(productID).collection('gallery').get().then(querySnapshot =>{ 
           const dataProductGallery = []; 
             querySnapshot.forEach( doc =>{
                 if(doc.exists){ 
                    dataProductGallery.push({ id: doc.id, ...doc.data()})
             }
      })
      resolve( dataProductGallery);
   }).catch( err =>{ 
       reject({message: err.message})
   })
})
}