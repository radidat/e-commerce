import { uniqCategory } from "../../utils/utils";
import { productsTypes } from "./products.type";
import { handleAddProduct, handleIncrimentCardItem, handleReduceItem, handleRemoveCardItem } from './products.helpers'
const INITIAL_STATE ={
    products:[],
    loadingSuggest: false, 
    categoryData:[],
    product:{},
    gallery:[],
    suggestProducts:[], 
    cardItems:[]
}


const productsReducer =(state =INITIAL_STATE, action)=>{ 
                    
                switch(action.type){ 
                    case productsTypes.SET_PRODUCTS_DATA:
                    return {...state, products:action.payload}
                    case productsTypes.LOADING_DATA: 
                   return {...state, loading:action.payload}
                    
                   case productsTypes.SET_CATEGORY_DATA:
                    return {...state, categoryData: action.payload}
                    case productsTypes.SET_PRODUCT_DATA:
                        return {...state, product: action.payload}
                     case productsTypes.FETCH_SUGGEST_PRODUCT_DATA:{
                        return {...state, loadingSuggest: true}
                     }
                    case productsTypes.SET_SUGGEST_PRODUCT_DATA:
                   return {...state, suggestProducts:action.payload, loadingSuggest: false}
                     case productsTypes.SET_GALLERY_DATA:
                     return {...state, gallery:action.payload}
                    case productsTypes.INCRIMENT_PRODUCT:
                        return {...state,  product:{...state.product, quantity: action.payload.quantity + 1}};
                        case productsTypes.DECRIMENT_PRODUCT:
                            return {...state,  product:{...state.product, quantity: action.payload.quantity - 1}}

                    case productsTypes.ADD_ITEMS:{ 
                   return {...state, cardItems: handleAddProduct(state.cardItems, action.payload)}
                    }
                    case productsTypes.INCRIMENT_CARD_ITEM: 
                   return {...state, cardItems:handleIncrimentCardItem(state.cardItems, action.payload)}
                   case productsTypes.DECRIEMENT_CARD_ITEM: 
                   return {...state, cardItems:handleReduceItem(state.cardItems, action.payload)}
                   case productsTypes.REMOVE_CARD_ITEM: 
                   return {...state, cardItems:  handleRemoveCardItem(state.cardItems, action.payload)}
                   case productsTypes.INITIALIZE_CARD_ITEMS:
                       return {...state, cardItems:[]}
                  default: 
                return state;
                }
              
          
}


export default productsReducer;