import React from 'react'; 
import Header from './Header';


const Container = ({children})=>{ 

    return(<> 
            <Header/>
            {children}   
         </>)
}
export default Container;