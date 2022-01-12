import React from 'react'; 
import { Link } from 'react-router-dom';

 export const ButtonOrange =({text, link, ...props})=>{

      if(link){
         return ( <>
            <Link to={link} className='btn-bg-color-orange' {...props}>{text}</Link>
           </>
         )
      }else{ 
         return ( <>
            <button  className='btn-bg-color-orange' {...props}>{text}</button>
           </>
         )
      }
 
}
export const ButtonBlack =({text, link})=>{

    return ( <>
       <Link to={link} className='btn-bg-color-black'>{text}</Link>
      </>
    )
}
 export const ButtonLight =({text, link})=>{

    return ( <>
       <Link to={link} className='btn-bg-color-light'>{text}</Link>
      </>
    )
}
