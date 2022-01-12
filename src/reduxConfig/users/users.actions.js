import {usersTypes} from './users.types'; 



export const signInSuccess =(dataUser)=>({ 
  type: usersTypes.SIGN_IN_SUCCESS, 
  payload: dataUser,
})
export const signUpUserStartAction = (dataSignUp)=>({
    type: usersTypes.SIGN_UP_USER_START, 
    payload: dataSignUp
})

export const errorSignUpAction = (error)=>({
     type:usersTypes.USER_ERROR, 
     payload :error
})

export const signInStartAction =(dataSignIn)=>({
  type: usersTypes.EMAIL_SIGN_IN_START, 
  payload: dataSignIn
})
export const checkUserSession = () => ({
  type: usersTypes.CHECK_USER_SESSION
});
export const signOutUserSuccess = () => ({
  type: usersTypes.SIGN_OUT_USER_SUCCESS
});
export const signOutUserStart = () => ({
  type: usersTypes.SIGN_OUT_USER_START
});

export const resetPasswordStart = userCredentials => ({
  type: usersTypes.RESET_PASSWORD_START,
  payload: userCredentials
});

export const resetPasswordSuccess = () => ({
  type: usersTypes.RESET_PASSWORD_SUCCESS,
  payload: true
});
export const userError = err => ({
  type: usersTypes.USER_ERROR,
  payload: err
});