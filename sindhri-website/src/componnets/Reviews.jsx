import React from "react";
import pic1 from '../assets/images/pic1.png'
import pic2 from '../assets/images/pic2.jpg'
import pic3 from '../assets/images/pic3.jpg'
import r from '../assets/images/r.jpg'
import qouteImg from "../assets/images/quote-img.png";
const Reviews = () => {
  return (
    <>
      <section className="review" id="review">
        <h1 className="heading">
          customer's <span>review</span>
        </h1>

        <div className="box-container">
          
            <div className="box" >
              <img src={qouteImg} alt="" className="quote" />
              <p>
              Happened to be there during my last visit to Sukkar,
              Food taste and quantity 10/10
              Service 10/10
              Ambience 10/10
              There are indoor and outdoor seating arrangements,
              </p>
              <img src={pic2} className="user" alt="" />
              <h3>Syed Rizwan</h3>
              <div className="stars">
                <img src={r}/>
              </div>
            </div>
            <div className="box" >
              <img src={qouteImg} alt="" className="quote" />
              <p>
              An absolute gem! From the warm welcome to the last bite, 
              every moment at SINDHRI RESTAURANT SUKKUR SINDH was perfection.
              The service was impeccable, and the food was simply divine.
              </p>
              <img src={pic1} className="user" alt="" />
              <h3>Kashif Khan</h3>
              <div className="stars">
                <img src={r}/>
              </div>
            </div>
            <div className="box" >
              <img src={qouteImg} alt="" className="quote" />
              <p>
              Great restaurant in Sukkur. Food was fantastic and service was 
              more then expectations. Value for money. Great place for dining
              in Sukkur. One of the best Parking: Easy and smooth. food quality 
              quantity was excellent
             
              </p>
              <img src={pic3} className="user" alt="" />
              <h3>Roshini Singh</h3>
              <div className="stars">
                <img src={r}/>
              </div>
            </div>
            
         
        </div>
        
      </section>
    </>
  );
};

export default Reviews;