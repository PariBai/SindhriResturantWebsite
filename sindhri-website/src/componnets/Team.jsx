import React from 'react'
import team1 from "../assets/images/team01.jpg";
import team2 from "../assets/images/team2.jpg";
import team3 from "../assets/images/team3.jpg";

const  Team = () => {
  return <>
  <section className='team' id='team'>
    <h1 className='heading'>
        our <span>Chefs</span>
    </h1>
    <div className='box-container'>
        <div className='box'>
            <div className='image'>
                <img src={team1} alt=""/>

            </div>
            <div className='content'>
                <a  className='title'>
                    Chef Raheel khan
                </a>
                <span>Joined Since 2000</span>
                <p>
                With a passion for fusion cuisine, Chef Raheel 
                brings a unique blend of flavors to every dish.

                </p>
                <a href='#' className='btn'>
                    Know More
                </a>
            </div>
        </div>
    
    
        <div className='box'>
            <div className='image'>
                <img src={team2} alt=""/>

            </div>
            <div className='content'>
                <a  className='title'>
                    Chef Sohail
                </a>
                <span>Joined Since 2002</span>
                <p>
                A master of traditional recipes, Chef Sohail's dishes
                are steeped in cultural authenticity and rich flavors.

                </p>
                <a href='#' className='btn'>
                    Know More
                </a>
            </div>
        </div>
    
    
        <div className='box'>
            <div className='image'>
                <img src={team3} alt=""/>

            </div>
            <div className='content'>
                <a  className='title'>
                    Chef Karan
                </a>
                <span>Joined Since 2005</span>
                <p >
                Known for her innovative approach, Chef Karan's creations
                marry classic techniques with contemporary twists.

                </p>
                <a href='#' className='btn'>
                    Know More
                </a>
            </div>
        </div>
    </div>
   </section>
  </>
}

export default Team ;