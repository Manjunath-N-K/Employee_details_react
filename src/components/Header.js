import React from 'react';

import { NavLink } from 'react-router-dom';
import {useGlobalContext} from '../context/context'
import { Link } from 'react-router-dom';



const Header = () => {
  const {loading}=useGlobalContext()
  return (
    <header>

      <h1>Employee details</h1>
      <hr />
      <div className="links">
        
       {
loading ? (<>
<NavLink to="/login" className="link" activeClassName="active" exact>
          Employeee List
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Employee
        </NavLink>
        </>)
        :(<>
        <Link to='/' variant="primary" className='submit-btn'>Back Home</Link>

        </>

        )

       }
        
      </div>
    </header>
  );
};

export default Header;