import { combineReducers } from "redux";
import productsReducer from "./products/products.reducer";
import usersReducer from "./users/users.reducer";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'

 const rootReducer= combineReducers({
          productsData:  productsReducer, 
          users: usersReducer
})

const persitConfig ={
    key:'root', 
    storage,
    whitelist:['productsData', 'users']
}

export default  persistReducer(persitConfig, rootReducer);;