import React, { useEffect, useState } from 'react'
import Closednav from '../Navbar/closednav'
import axios from 'axios'
import CardData from "../body/CardAligner.1"
import Footer from './footer'
function Productspage() {
  const[products1,setproducts]=useState([])
  useEffect(
    ()=>{
    axios.get("http://localhost:3000/posts").then((res)=>setproducts(res.data))
  },[]
  )

  const products=products1.map((card)=>{
    return(
      {...card,quantity:1}
    )
  })
  // console.log(fever)
  return (
    <div>

      <Closednav ></Closednav>
      <CardData productdata={products}></CardData>
      <Footer></Footer>
    </div>
  )
}

export default Productspage
