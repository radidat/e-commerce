import React from 'react'
import {Link} from 'react-router-dom';
import {ButtonBlack, ButtonLight} from '../../UI/Button';
import {useSelector} from 'react-redux';
import Slide from 'react-reveal/Slide';
function DetailProductHome() {


    return (
        <div className='detail-product-home'>
              <Slide left>
              <article className='detail-product-zx-neuf'>
             <div className='position-img-product-zx-neuf'>
             <div className='rounded-one'></div>
             <div className='rounded-two'></div>
             <div className='rounded-three'></div>
             <img src='/assets/home/mobile/image-speaker-zx9.png'className='detail-product-zx-neuf-img-speaker'/>
             </div>
            
             <div className='detail-product-home-content'>
              <h4></h4>
              <p></p>
                <ButtonBlack link={'/detailProduct/ZX9%20Speaker'} text='see product'/>
             </div>
             </article> 
         <article className='detail-product-zx-sept'>
            <img src='/assets/home/mobile/image-speaker-zx7.jpg'></img>
            <div className='detail-product-zx-sept-text'>
                <h4></h4>
              <ButtonLight link ={'/detailProduct/ZX7%20Speaker'}text='see product'/>
            </div>
             </article> 
         <article className='detail-product-yx-un'>
             <img src='/assets/home/mobile/image-earphones-yx1.jpg'/>
             <div>
                <h4>YX1 EARPHONES</h4> 
                <ButtonLight link ={'/detailProduct/YX1%20Wireless%20Earphones'}text='see product'/>
             </div>
             </article>  
        </Slide>
         
        </div>
    )
}



export default DetailProductHome
