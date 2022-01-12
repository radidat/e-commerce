import { applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import  persistReducer  from './rootReducer';
import { persistStore } from 'redux-persist';
import { rootSaga } from './rootSaga';
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware]

 export const store = createStore(persistReducer,applyMiddleware(...middlewares) );
export const persistor= persistStore(store);
 sagaMiddleware.run(rootSaga);