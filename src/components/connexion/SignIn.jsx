import React, {useState, useEffect} from 'react'; 
import {Link, useHistory} from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import {signInStartAction} from '../../reduxConfig/users/users.actions'; 

const mapToState =({users})=>({ 

    currentUser: users.currentUser
})
const SignIn = ()=>{  
         const [email, setEmail] = useState(''); 
         const [password, setPassword] = useState(''); 
         const history = useHistory(); 
         const {currentUser} = useSelector(mapToState);
         const [error, setError]= useState([])
         const dispatch = useDispatch();

         const resetForm=()=>{  
            setEmail('');
            setPassword('');
        }
      
         useEffect(()=>{ 
             if(currentUser !==null){
                 history.push('/')
                 resetForm();
             }
         }, [currentUser])
         const onSubmitDataSignIn=(e)=>{ 
             e.preventDefault();
             if(email!=='' && password !==''){ 
                dispatch(signInStartAction({email, password}))
             }else{
                 const error = ['veuillez remplir tous les champs']; 
                 setError(error)
             }
            
         }

    return(<div className='container-form signin'>
                <div className='title-connect'>
                <h5>Se connecter</h5>
                </div>
                {error && <h4 style={{color:'red', fontSize:'16px', textAlign:'center'}}>{error[0]}</h4>}
         <form  onSubmit ={onSubmitDataSignIn}className='form-connect'>
             <div className='container-input'>
              <label htmlFor='email'>email : </label>
              <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} name='email'/>
             </div>
             <div className='container-input'>
              <label htmlFor='password'>Mot de passe : </label>
              <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} name='password'/>
             </div>
             <button className='btn-connect' type='submit'>Se conntecter</button>

         </form>
         <div className='link-connect-container'>
         <Link to ='/signup' className='link-connect'>s'inscrire</Link>
         <Link to ='/forgotPassword' className='link-connect'>Mot de passe oublié ?</Link>
         </div>
         
    </div>
    )
}

export default SignIn;