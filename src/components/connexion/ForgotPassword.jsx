import React, {useState} from 'react'; 
import {resetPasswordStart} from '../../reduxConfig/users/users.actions'
import { useDispatch, useSelector} from 'react-redux';

const mapState =({users})=>({ 
    resetPasswordSucces: users.resetPasswordSucces
})
const ForgotPassword =()=>{ 
const [email, setEmail]= useState(''); 
const [sendEmailSuccess, setSendEmailSuccess] = useState(false);
const {resetPasswordSucces}=useSelector(mapState);
 const dispatch = useDispatch();

const onResetPassword =(e)=>{ 
            e.preventDefault();
            console.log(resetPasswordSucces) 
    if(email!==''){ 
       dispatch(resetPasswordStart(email))
       setSendEmailSuccess(true)
       setEmail('')
    }

}
    return(<div className='container-form forgotPassword '>
        <div className='title-connect'>
         <h5>Changer de mot de passe</h5>
        </div>  
     {sendEmailSuccess && <h5 style={{color:'green', textAlign:'center', fontSize:'16px'}}>un message a été envoyé sur votre adresse mail</h5>}
    <form onSubmit={onResetPassword} className='form-connect'>
        <div className='container-input'>
         <label htmlFor='email'>email : </label>
         <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} name='email'/>
        </div>
        <button type='submit' className='btn-connect forgotPassword'>Envoyer</button>
    </form>
</div>)
}

export default ForgotPassword;