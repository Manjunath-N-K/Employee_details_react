import React from 'react'
import { Link } from 'react-router-dom';


function Error() {
    return (
       <div className='error'>
      <h1>404</h1>
      <h3>Sorry,the page you tried cannot be found</h3>
      <Link to='/login' className='btn'>
        Back home
      </Link>
    </div>
    )
}

export default Error
