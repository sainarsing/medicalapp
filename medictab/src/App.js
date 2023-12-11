// import logo from './logo.svg';
import './App.css';
// import Closednav from './components/Navbar/closednav';
import { createContext, useState } from 'react';
import Routingpro from './components/Navbar/Routingpro';

export const logincontext=createContext()
export const productcontext=createContext();
// export const pastcontext=createContext();
function App() {
//   const [past,setPast]=useState([])
//   const pasthandler=(past1)=>{
//     // var b= {...past,past1}
//     // setPast(b)
//     setPast((prevpast)=>[...prevpast,past1])
//   }
// console.log(past)
  const[cart,setCart]=useState([])
  const cartadd=(card)=>{
    setCart([...cart,card])
  }
  // console.log(cart)





  const[login,setlogin]=useState(true);
  const setloginn=()=>{
    setlogin(!login)
  }
  // productlist:productlist,setprodutlist:setprodutlist

  return (

    // <pastcontext.Provider value={{past:past,pasthandler1:pasthandler}}>
      <productcontext.Provider value={{cart1:cart,carthandler:cartadd,setcart:setCart}}>
    <logincontext.Provider value={{login:login,setlogin1:setloginn}}>
      <Routingpro></Routingpro>
    {/* <Closednav></Closednav> */}
    </logincontext.Provider>
    </productcontext.Provider>
    // </pastcontext.Provider>
  );
}

export default App;
