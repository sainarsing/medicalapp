import React, { useContext, useEffect, useState } from "react";
// import { ProductContext } from '../App';
import styles from "../styling/Cartscreen.module.css";
import {  productcontext } from "../../App";
// import Header1 from './Header1';
// import Header2 from './Header2';
// import Footer from './Footer';
import { loadStripe } from "@stripe/stripe-js/";
import Closednav from "../Navbar/closednav";
import image from "../body/myriam-zilles-KltoLK6Mk-g-unsplash.jpg"

function CartScreen() {
  const [orders, setOrders] = useState([]);
  // const past = useContext(pastcontext);
  // const decrement = (presentcart) => {
  //   past.pasthandler1(presentcart);
  // };
  // console.log(past)
  // const {cart, cartadd} = useContext(productcontext);
  const wall1 = useContext(productcontext);
  // console.log(cart);

  const incrementCountHandler = (id) => {
    const updatedCart = wall1.cart1.map((product) => {
      // console.log(product)
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    //  console.log(updatedCart)
    wall1.setcart(updatedCart);
  };

  const decrementCountHandler = (id) => {
    const updatedCart = wall1.cart1.map((product) => {
      if (product.id === id) {
        if (product.quantity > 1) {
          return { ...product, quantity: product.quantity - 1 };
        } else {
          return null;
        }
      }
      return product;
    });

    const newCart = updatedCart.filter((product) => product !== null);

    wall1.setcart(newCart);
  };

  const finalPrice = wall1.cart1.map((product) => {
    const priceWithoutSpecialChars = parseFloat(
      product.price.replace(/[^0-9.]/g, "")
    );
    const totalPrice = priceWithoutSpecialChars * product.quantity;
    return totalPrice;
  });

  let total = 0;
  for (let i = 0; i < finalPrice.length; i++) {
    total += finalPrice[i];
  }

  const removeHandler = (id) => {
    const updatedCart = wall1.cart1.filter((product) => product.id !== id);
    wall1.setcart(updatedCart);
  };

  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51ODiD8SJmdjx949oZrsEuNXXUpwQhZf3FuD53BUWP2vJQZw3x2yi5Z608Pp6j0gXHSg6Qaj0fVJR0wzNf9bLCHvZ00jsyI2uwM"
    );

    const body = {
      products: wall1.cart1,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      "http://localhost:7000/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    const newOrder = {
      id: new Date().getTime(),
      products: wall1.cart1,
      total: total,
      timestamp: new Date(),
    };

    
    setOrders((prevOrders) => [...prevOrders, newOrder]);
    sessionStorage.setItem('orders', JSON.stringify([...orders, newOrder]));

    if (result.error) {
      console.log(result.error);
    }

  };

  useEffect(() => {
    const storedOrders = JSON.parse(sessionStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, []);

  // console.log(sessionStorage.getItem('orders'))
  return (
    <>
      <Closednav></Closednav>

      <div className={styles.mainContainer}>
        <div className={styles.leftContainer}>
          <p className={styles.bag}>Cart</p>

          {wall1.cart1.map((eachProduct, index) => (
            <>
              <div className={styles.leftPart} key={eachProduct.id}>
                <div>
                  <img
                    className={styles.cartImage}
                    src={image}
                    alt={eachProduct.title}
                  />
                </div>
                <div className={styles.left}>
                  <div className={styles.leftTitleBlock}>
                    <h4>{eachProduct.name}</h4>
                    <p>{`by ${eachProduct.brand}`}</p>
                    <div style={{ display: "flex", gap: "30px" }}>
                      <p>{eachProduct.price}</p>
                      <div style={{ lineHeight: "50px" }}>
                        <button
                          className={styles.decrement}
                          onClick={() => decrementCountHandler(eachProduct.id)}
                        >
                          -
                        </button>
                        <h4 className={styles.count}>{eachProduct.quantity}</h4>
                        <button
                          className={styles.increment}
                          onClick={() => incrementCountHandler(eachProduct.id)}
                        >
                          +
                        </button>
                        <button
                          className={styles.remove}
                          onClick={() => removeHandler(eachProduct.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={styles.priceBlock}>
                    <h4>{`₹${finalPrice[index]}`}</h4>
                  </div>
                </div>
              </div>
              <hr style={{ marginLeft: "12%" }}></hr>
            </>
          ))}
        </div>

        <div className={styles.rightContainer}>
          <p className={styles.summary}>Summary</p>
          <div className={styles.rightBlock1}>
            <span className={styles.total}>Subtotal</span>
            <span style={{ fontWeight: "500" }}>₹{total}.00</span>
          </div>
          <div className={styles.rightBlock2}>
            <span>Shipping</span>
            <span>₹0.00</span>
          </div>
          <div style={{ marginTop: "15px" }} className={styles.rightBlock2}>
            <span>Tax</span>
            <span>₹0.00</span>
          </div>
          <hr style={{ marginRight: "14%", marginLeft: "4%" }}></hr>
          <div className={styles.totalBlock}>
            <p>Total</p>
            <p style={{ fontWeight: "500" }}>₹{total}.00</p>
          </div>
          <hr style={{ marginRight: "14%", marginLeft: "4%" }}></hr>
          <button type="button" onClick={makePayment} className={styles.buyNow}>
            Place Order
          </button>
          {/* <button
            className={styles.decrement}
            onClick={() => decrement(wall1.cart1)}
          >
            past
          </button> */}
        </div>
      </div>
    </>
  );
}

export default CartScreen;
