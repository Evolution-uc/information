
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Contact from './pages/Contact';
import Singup from './components/Singup';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/'element={<Home/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Singup' element = {<Singup/>}/>
   </Routes>
   </BrowserRouter>
   
   
  )
}

export default App