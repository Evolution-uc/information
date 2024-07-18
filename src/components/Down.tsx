import  { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';




export default function Down() {
  const [toggle,setToggle] = useState(false);
  function handleTogle () {
    setToggle(!toggle)
  }
  return (
    <div>
      
      
      <GiHamburgerMenu className=""onClick={handleTogle} />
     

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
