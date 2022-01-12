import {call, put, all, takeLatest} from 'redux-saga/effects'; 
import {usersTypes} from './users.types'; 
import {auth} from '../../configFirebase/configFirebase'
import {errorSignUpAction,signInSuccess, signOutUserSuccess,resetPasswordSuccess,userError } from './users.actions';
import {handleProfile, getCurrentUser, handleResetPasswordAPI} from './users.helpers';


function * getSnapShotFromUserAuth (user, additionalData={}){

              try{ 
                const getUser = yield call(handleProfile, user, additionalData); 
                const snapshot = yield getUser.get(); 
                console.log(snapshot);
                yield put(signInSuccess({
                    id: snapshot.id, 
                    ...snapshot.data(),
                  
                }))

              }catch(error){

              }

}

function * signUpUser({payload:{firstName, lastName, email, password, confirmPassword}}){ 

            try{ 
                if(password !== confirmPassword){
                    const err =['les mots de passe ne correspondent pas'];
                     yield put(errorSignUpAction(err))
                     return;
                }
                const userData =  yield auth.createUserWithEmailAndPassword(email, password); 
                 const additionalData ={ firstName, lastName}; 
                 yield getSnapShotFromUserAuth(userData.user,additionalData );
            }catch(error){
                    const err= error.message; 
                    let arrayError = []
                     if(err =='The email address is already in use by another account.'){
                         arrayError = ['cette adresse email est déjà utilisée, veuillez choisir une autre.']
                     }
                   
               yield put(errorSignUpAction(arrayError));
            }

         
         
}


function * onSignUpUser(){

    yield takeLatest(usersTypes.SIGN_UP_USER_START, signUpUser)
}

export function* emailSignIn({payload:{email, password}}){

    try{
        const {user} = yield auth.signInWithEmailAndPassword(email,password); 
        console.log(user)
        yield getSnapShotFromUserAuth(user);
           //yield put(signInSuccess)
      }catch(error){ 

      }
}

export function* onEmailSignInStart(){ 

   yield takeLatest(usersTypes.EMAIL_SIGN_IN_START, emailSignIn)
}

export function* isUserAuthenticated(){

    try{
        const userAuth = yield getCurrentUser(); 
        if(!userAuth) return;

        yield getSnapShotFromUserAuth(userAuth);
    }catch(error){

    }

}

export function* onCheckUserSession(){ 

    yield takeLatest(usersTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* signOutUser() {
    try {
      yield auth.signOut();
      yield put(
        signOutUserSuccess()
      )
  
    } catch (err) {
      // console.log(err);
    }
  }
  
  export function* onSignOutUserStart() {
    yield takeLatest(usersTypes.SIGN_OUT_USER_START, signOutUser);
  }
  export function* resetPassword({ payload}) {
    try {
      yield call(handleResetPasswordAPI, payload);
     yield put(resetPasswordSuccess())
  
    } catch (err) {
      yield put(
        userError(err)
      )
    }
  }
  export function* onResetPasswordStart() {
    yield takeLatest(usersTypes.RESET_PASSWORD_START, resetPassword);
  }
 function * usersSaga(){ 

       yield all([call(onSignUpUser),
                call(onCheckUserSession),
                call(onEmailSignInStart),
                call(onSignOutUserStart),
                call(onResetPasswordStart)
            ])
}

export default usersSaga;