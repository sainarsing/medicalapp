// import React, { useContext } from 'react'
import Closednav from '../Navbar/closednav'
// import { pastcontext } from '../../App'
import image from "../body/myriam-zilles-KltoLK6Mk-g-unsplash.jpg"

function Pastorders() {
    // const orders=useContext(pastcontext)
    // console.log(orders.past)
    // const data  = orders.past.map(val=>val)
    // console.log(data.map(val=> val.map(v=>v.name)));
    // console.log(localStorage.getItem("orders"))
    let productHistory = JSON.parse(sessionStorage.getItem("orders")) || [];

  return (
    <div>
      <Closednav></Closednav>
       {        
        productHistory.map(card=><div style={{marginTop:50}}><h3>{card.id}</h3> <div>{card.products.map(val=><>
        <p>name : {val.name}</p>
        <p>brand : {val.brand}</p>
        <img src={image} width={100} height={120}></img>
        {/* <p>quantity{val.net_quantity}</p> */}
        <p>quantity : {val.quantity}</p>
        </>)}</div> </div>)
       }
    </div>
  )
}

export default Pastorders
