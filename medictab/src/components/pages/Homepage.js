import React from 'react'
import Closednav from '../Navbar/closednav'
import { FiArrowRight } from "react-icons/fi";
import BannerImage from "../body/istockphoto-1300036753-2048x2048.jpg";
import { Link } from 'react-router-dom';
import Footer from './footer';
function Homepage() {
  return (
    <>
     <Closednav></Closednav>
    <div style={{marginTop:120}} className="home-container">
      <div className="home-banner-container">
        {/* <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div> */}
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Needed Tablets Delivered At Time
          </h1>
          <p className="primary-text">
            Empowering Health, One Tablet at a Time: Discover Your Path to Wellness with Our Range of Trusted Medicine Tablets! 
          </p>
          <Link style={{marginTop:70}} to={"/products"} className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </Link>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
      </div>
     
    
    </>
  )
}

export default Homepage
