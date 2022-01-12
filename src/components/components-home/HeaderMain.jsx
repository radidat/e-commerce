import React from 'react'
import {ButtonOrange} from '../../UI/Button';
import Fade from 'react-reveal/Fade';
function HeaderMain() {
     

    return (
        <div className='header-main' >
            <img src='/assets/home/mobile/image-header.jpg' className='img-header'/>
            <div className='header-main-contain'>
            <Fade top>
            <p className='short-text'>New product</p>
            <h1 className='header-main-title'>XX99 Mark II Headphone</h1>
        </Fade>
            <p className='header-main-text'></p>
       <ButtonOrange link ={'/detailProduct/XX99%20Mark%20II%20Headphones'}text={'see product'}/> 
            </div>
        </div>
    )
}

export default HeaderMain
