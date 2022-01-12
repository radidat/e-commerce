import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';

function FooterGeneral() {
    const [dateNow, setDateNow] = useState(''); 


    useEffect(()=>{ 
  const date = new Date().getFullYear().toLocaleString(); 
         setDateNow(date);

    },[])
    return (
        <div className='footer' style={{top:'25px'}}>
             <div className='footer-bar'></div>
             <h4>audiophile</h4>
             <ul className='nav-link'>
                 <li><Link to='/'>Home</Link></li>
                 <li><Link to='/category/headphones'>Headphones</Link></li>
                 <li><Link to='/category/speakers'>Speakers</Link></li>
                 <li><Link to='/category/earphones'>Earphones</Link></li>
             </ul>
             <p>Audiophile is an all in one stop to fulfill your
                  audio needs. We're a small team of
                   music lovers and sound specialists who are devoted to
                  helping you get the most out of personal audio.
                   Come and visit our demo facility
                    - we’re open 7 days a week.</p>
            <p className='copyRight'>Copyright {dateNow}. All Rights Reserved</p>
        </div>
    )
}

export default FooterGeneral