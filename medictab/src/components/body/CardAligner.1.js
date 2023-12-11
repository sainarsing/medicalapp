import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { productcontext } from "../../App";
import image from "../body/myriam-zilles-KltoLK6Mk-g-unsplash.jpg"

const CardData = ({productdata}) => {
  

  // Define the number of cards to display in each row.
  const cardsPerRow = 4;

  // Create an array of rows, each containing a subset of card data.
  const rows = [];
  for (let i = 0; i < productdata.length; i += cardsPerRow) {
    const row = productdata.slice(i, i + cardsPerRow);
    rows.push(row);
  }
  
  // const {cartHandler}=useContext(productcontext)
  const cart=useContext(productcontext)
  const addtohandler=(card)=>{
    {cart.carthandler(card)}
  }

  return (
    <div className="container">
      {rows.map((row, rowIndex) => (
        <div className="row" key={rowIndex} style={{marginTop:80}} >
          {row.map((card) => (
            <div className="col" key={card.id}>
              <div className="card">
                <div style={{display:"flex",alignContent:"space-between"}} className="card-body">
                  <div>
                <img src={image} width={100} height={120} alt="no"/>
                <button style={{marginTop:110}} >view product</button>
                </div>
                  <div style={{paddingLeft:0}}>
                    <h5 style={{marginTop:10}} className="card-title">{card.name}</h5>
                  <h6 className="card-title">by brand:{card.brand}</h6>
                  <p className="card-text">Price : {card.price}.</p>
                  <p className="card-text">Quantity : {card.net_quantity}.</p>
                  {/* <p>{card.quantity}</p> */}
                  <button>
                  <Link to={"/cart"} style={{textDecoration:"none",color:"black"}} onClick={()=>addtohandler(card)} >Add to cart</Link>
                  </button>
                  
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CardData;
