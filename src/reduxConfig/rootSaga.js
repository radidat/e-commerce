import { call, all} from 'redux-saga/effects'; 
import productsSaga from './products/products.saga';
import usersSaga from './users/users.saga';

export function* rootSaga(){

    yield all([ call(productsSaga),
          call(usersSaga)
    ])


}