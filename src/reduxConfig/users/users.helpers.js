import { reject } from 'q';
import {auth, db} from '../../configFirebase/configFirebase';



 export const handleProfile =async(user, additionalData={})=>{
      
    console.log(user);
     let {uid}= user; 
    let getUser = db.doc(`users/${uid}`);
    let userExist =  await getUser.get(); 
    
    if(!userExist.exists){
        const {email} = user; 
        const timestamp = new Date();
        const {firstName, lastName}= additionalData;
          await getUser.set({
            email: email, 
             firstName: firstName, 
             lastName: lastName, 
             createAt: timestamp
          })
    }
    return getUser;
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  })
}

export const handleResetPasswordAPI=(email)=>{

  const config={
    url:'http://localhost:3000/signin'
  }
  return new Promise((resolve, reject)=>{ 
        auth.sendPasswordResetEmail(email, config).then(()=>{
              resolve()
        }).catch(()=>{ 
          const err = ['la réinitialisation de mot de passe ne sait pas effectué']
          reject(err);
        })
  })
}