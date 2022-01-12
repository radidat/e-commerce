import React, {useEffect, useState} from 'react'; 
import { ButtonOrange } from '../UI/Button';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectCardItemCount,selectCardTotal  } from '../reduxConfig/products/products.selectors';
import {incrimentCardItem,decrimentCardItem,removeCardItem } from '../reduxConfig/products/products.actions'; 
import {signOutUserStart} from '../reduxConfig/users/users.actions'; 

const mapToState =({productsData, users})=>({ 
  cardItems: productsData.cardItems,
  currentUser: users.currentUser
})
const Header =()=>{ 

       const [modal, setModal] = useState(false);
       const countItems = useSelector(selectCardItemCount); 
       const {cardItems, currentUser} = useSelector(mapToState); 
       const dispatch = useDispatch()
       const signOut=()=>{ 
     
         dispatch(signOutUserStart())
       }

    return <div className ='header'>

        <div className='title-header'>
        <h1><Link to='/'>audiophile</Link></h1>
        </div>
        <ul className='nav-link-responsive'>
            <li><Link to='/'>home</Link></li>
            <li><Link to='/category/headphones'>headphones</Link></li>
            <li><Link to='/category/speakers'>speakers</Link></li>
            <li><Link to='/category/earphones'>earphones</Link></li>
        </ul>
        <div>
          <div className='shopping-cart-userConnect-container'>
            <div className='shopping-cart-container'>
            <p style={{color:'#D87D4A'}}>{countItems}</p>
            <img src='/shopping-cart.svg' alt='shopping-cart' style={{cursor:'pointer'}} onClick={()=>setModal(true)} className='shopping-cart-img'/>
            
             </div>
             <div className='userConnect'>
            {currentUser && <div className='signOut-container'>
                  <h6>Bonjour, {currentUser.firstName}</h6>
                  <button onClick={()=>signOut()} className='btn-signOut'> se déconnecter</button>
            </div>
           }
            {!currentUser && <Link to='/signin' className='btn-signIn'>se connecter</Link> }
          </div>
          </div>
        
          {modal && <ModalCheckProducts setModal={setModal} modal={modal}/>}
        </div>
     
       
    </div>; 
}

function ModalCheckProducts({setModal, modal}){ 

  const {cardItems} = useSelector(mapToState)

 const cardTotal = useSelector(selectCardTotal);
    return createPortal(
        <>
       <div
            className="modal fade show"
            tabIndex="-1"
            role="dialog"
            style={{ display: "block" }}
          >
            <div className="modal-dialog modal-sm modal-md modal-lg ">
              <div className="modal-content">
           
                <div className="modal-body">
                <button
                onClick={()=>setModal(false)}
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    style={{float:'right', margin:'2px 5px 5px 5px', 
                    background:'none', outline:'none', border:'none', width:'50px', height:'50px'}}
                  >
                    <span aria-hidden="true">
                      &times;
                    </span>
                  </button>
                   {cardItems.length ===0 ? 'votre panier est vide':'' }
              {cardItems && cardItems.map(product =>{
                   return<ShoppingCart key={product.id} product={product}/>
              })}
  
               <div className='d-flex justify-content-between'>
                     <p>Total</p>
                     <p>${cardTotal}</p>
                 </div>
                <ButtonOrange onClick={()=>setModal(false)} link={'/checkoutPage'} text={'checkout'}/>
                </div>
              </div>
            </div>
            
          </div>
          <div className="modal-backdrop fade show"></div>
    
         </> , document.body
      );
}
const ShoppingCart=({product})=>{ 

       const dispatch = useDispatch();

       const onIncrimentItem =(e)=>{
         e.preventDefault();
              dispatch(incrimentCardItem(product))
       }
       const onDecrimentItem =(e)=>{
         e.preventDefault()
        dispatch(decrimentCardItem(product))
 }
 const onRemoveItem=(e)=>{ 
   e.preventDefault();
      dispatch(removeCardItem(product))
 }
    return(
      <>
      {product &&
      <div>
      <div className='shopping-cart-ckecked-container'> 
      <img src={product.image.desktop} alt={product.name}></img> 

         <div>
             <h6>{ product.name}</h6>
             <p>$ {product.price}</p>
             <p> Quantity: {product.quantity}</p>
       </div> 

       <div className='shopping-cart-btn-container'>
       <button className='number-product' onClick={onDecrimentItem}>-</button>  
        <p style={{color: 'black'}}>{product.quantity}</p>
        <button className='number-product' onClick={onIncrimentItem}>+</button>
       </div> 
       <button onClick={onRemoveItem} className='removeItem'>X</button>
       </div>
       
  
</div>
       }
      </>
    
    )
}
Header.defaultProps={
  currentUser:null,
}
export default Header; 