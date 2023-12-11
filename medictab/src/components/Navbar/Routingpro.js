import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Productspage from '../pages/Productspage'
import Cartpage from '../pages/Cartpage'
import Loginpage from '../pages/Loginpage'
import Registerpage from '../pages/Registerpage'
import { logincontext } from '../../App'
import Loginhome from '../pages/Loginhome'
import Aboutpage from '../pages/Aboutlopage'
import Succes from '../pages/Succes'
import Cancel from '../pages/Cancel'
import Pastorders from '../pages/Pastorders'
import PageNotFound from '../pages/PageNotFound'

function Routingpro() {
    const wall=useContext(logincontext)
  return (
    <>
    <BrowserRouter>
   {
    wall.login? <Routes>
    <Route path="/" element={<Homepage />}/>
    <Route path='/products' element={<Productspage/>}/>
    <Route path='/cart' element={<Cartpage/>}/>
    <Route path='/pastorders' element={<Pastorders/>}/>
    <Route path='/success' element={<Succes/>}/>
    <Route path='/cancel' element={<Cancel/>}/>
    <Route path='*' element={<PageNotFound/>}/>
</Routes>
:
<Routes>
    <Route path="/" element={<Loginhome />}/>
    <Route path="/Login" element={<Loginpage />}/>
    <Route path='/Register' element={<Registerpage/>}/>
    <Route path='/About' element={<Aboutpage/>}/>
    <Route path='*' element={<PageNotFound/>}/>
</Routes>
   }
    </BrowserRouter>
    </>
  )
}

export default Routingpro
