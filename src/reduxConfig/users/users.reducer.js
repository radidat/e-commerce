import {usersTypes} from './users.types';

const INITIAL_STATE ={ 
    currentUser: null, 
    Errors: [],
    resetPasswordSucces:false,
}

const usersReducer =(state=INITIAL_STATE, action)=>{ 
                     
                    switch(action.type){
                    case usersTypes.SIGN_IN_SUCCESS :
                    return {...state, currentUser:action.payload}; 
                    case usersTypes.USER_ERROR: 
                     return {...state, Errors: action.payload};

                     case usersTypes.RESET_PASSWORD_SUCCESS:
                       return {
                        ...state,
                        resetPasswordSuccess: action.payload
                         } 
                         case usersTypes.RESET_USER_STATE:
                            case usersTypes.SIGN_OUT_USER_SUCCESS:
                              return {
                                ...state,
                                ...INITIAL_STATE
                              }
                     default: 
                     return state;
                    }

}


export default usersReducer; 