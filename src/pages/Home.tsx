
import Navbar from '../components/Navbar'

import Hero from '../components/Hero'


function Home() {
  return (
    <div>
      <div className=' relative'>
      <Navbar />
      <div className='absolute'>
      {/* <Down/> */}
      </div>
      
      </div>
 
   <Hero/>
    </div>
  )
}

export default Home