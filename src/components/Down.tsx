import  { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import Login from '../pages/Login';
import Contact from '../pages/Contact';
import Singup from './Singup';



export default function Down() {
  const [toggle,setToggle] = useState(false);
  function handleTogle () {
    setToggle(!toggle)
  }
  return (
    <div>
      
      {/* <button className='btn btn-secondary'onClick={handleTogle}> */}
      <GiHamburgerMenu className=""onClick={handleTogle} />
      {/* </button> */}

      { toggle ?
      <div className='flex flex-col'>
        <Link to="sing up">Singup</Link>
        <Link to="Contact"> Contact </Link>
        <Link to="Login">Login</Link>
        
        

      </div> : null

      }
    </div>
  )
}
