import React, {useState, useEffect, forwardRef} from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { signUpUserStartAction } from '../../reduxConfig/users/users.actions';
import {useHistory} from 'react-router-dom';

const mapState=({users})=>({ 
   currentUser : users.currentUser,
   errors: users.Errors
})
const SignUp = ()=>{  

         const dispatch = useDispatch();
         const history = useHistory(); 
         const {currentUser, errors} = useSelector(mapState); 
         const [error, setError] = useState([]);
         const [state, setState] = useState({ 
             firstName:'', 
             lastName:'',
             email:'', 
             password:'', 
             confirmPassword:'', 

         });

      useEffect(()=>{
                  if(currentUser !==null){ 
                    history.push('/') }
      },[currentUser])

      console.log(currentUser)
        const handleChange = (e)=>{ 
           const target = e.target; 
            let name = target.name; 
            let value = target.value; 
           setState({...state, [name]: value})
        }
        const onSubmitDataSignUp =(e)=>{ 
               e.preventDefault(); 
               const {firstName, lastName,email, password, confirmPassword} = state; 
                for(let property in state ){ 
                      if(state[property]!==''){ 
                        dispatch(signUpUserStartAction({firstName, lastName, email, password, confirmPassword})); 
                      }else{
                        const err = ['vous devez remplir tous les champs']; 
                        setError(err);
                      }
                    
                }
               
        }
        console.log(errors)
    return(<div className='container-form signup'>
         <div className='title-connect'>
                 <h5>S'inscrire</h5>
             </div>
              {errors && errors.map((error, index) =>{ 
                return <h4 key ={index} style={{color:'red', fontSize:'16px', textAlign:'center', marginTop:'15px'}}>{error}</h4>
              })}
             {error && <h4 style={{color:'red', fontSize:'16px', textAlign:'center', marginTop:'15px'}}>{error[0]}</h4>}
         <form  onSubmit ={onSubmitDataSignUp}className='form-connect'>
             <div className='container-input'>
              <label htmlFor='firstName'>Nom : </label>
              <input type='text' value={state.firstName} onChange={handleChange} name='firstName'/>
             </div>
             <div className='container-input'>
              <label htmlFor='lastName'>Prenom : </label>
              <input type='text' value={state.lastName} onChange={handleChange} name='lastName'/>
             </div>
             <div className='container-input'>
              <label htmlFor='email'>email : </label>
              <input type='email' value={state.email} onChange={handleChange} name='email'/>
             </div>
             <div className='container-input'>
              <label htmlFor='password'>Mot de passe : </label>
              <input type='password' value={state.password} onChange={handleChange} name='password'/>
             </div>
             <div className='container-input'>
              <label htmlFor='confirmPassword'>Confirmer le mot de passe : </label>
              <input type='password' value={state.confirmPassword} onChange={handleChange} name='confirmPassword'/>
             </div>
            <button type='submit' className='btn-connect signup'>s'inscrire</button>
         </form>
    </div>
    )
}

export default SignUp; 
