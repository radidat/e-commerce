import {call, takeLatest, put, all} from 'redux-saga/effects'; 
import { getAllProducts, getCategory, getProductData,getDataSuggestion,getDataGallery } from './products.utils';
import {productsTypes} from './products.type'; 
import {getProductsActions,getProductAction, getCategoryAction, getSuggestionProducts,getGallery } from './products.actions';


/*fetchProducts*/
function* fetchProducts(){

    const products =  yield getAllProducts(); 
    yield put(getProductsActions(products));
}


function*onfetchProducts(){

    yield takeLatest(productsTypes.FETCH_PRODUCTS_DATA, fetchProducts)
}

/* fetchProduct*/ 
function* fetchProduct(action){

    const product =  yield getProductData(action.payload); 
       const productData ={}
    for( const doc of product.docs){ 
           Object.assign(productData, {id:doc.id, quantity: 0,...doc.data(),})
    }
    
   // console.log(gallery)
      // productData.imagesGallery= gallery
     yield put(getProductAction(productData));

}


function*onfetchProduct(){

    yield takeLatest(productsTypes.FETCH_PRODUCT_DATA, fetchProduct)
}
/* getCategory*/ 

 function*fetchCategoryData(action){
       
                        const category =  yield getCategory(action.payload); 
                        const dataCategory=[]

                        for(const doc of category.docs){
                               dataCategory.push({id :doc.id, ...doc.data()}); 
                          }
                    yield put(getCategoryAction(dataCategory))
 };

function*onfetchCategory(){ 
    
    yield takeLatest(productsTypes.FETCH_CATEGORY_DATA, fetchCategoryData)
}

/*fetchSuggestionPorducts*/
function*fetchSuggestionProductsData(action){
            const  productsSuggestion=  yield getDataSuggestion(action.payload);
             const gallery = yield getDataGallery(action.payload);
             yield put(getSuggestionProducts(productsSuggestion));
             //  yield put( getGallery(gallery))
}

function* onfetchSuggestionPorductsData(){

    yield takeLatest(productsTypes.FETCH_OTHER_DATA_PRODUCT,fetchSuggestionProductsData )
}
function*fetchGalleryData (action){
     const gallery = yield getDataGallery(action.payload);
       yield put( getGallery(gallery))
}

function* onfetchGalleryData(){

yield takeLatest(productsTypes.FETCH_OTHER_DATA_PRODUCT, fetchGalleryData )
}

 export default function* productsSaga(){

    yield all([
        call(onfetchProducts),
        call(onfetchCategory),
        call(onfetchProduct),
        call(onfetchSuggestionPorductsData),
        call(onfetchGalleryData)   
        ])
}