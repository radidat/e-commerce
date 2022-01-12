import React from 'react'
import {Link}from 'react-router-dom';
function Goback() {
    return (
        <div>
            <Link className='go-back-link' to='/'>Go back</Link>
          </div>
    )
}

export default Goback
