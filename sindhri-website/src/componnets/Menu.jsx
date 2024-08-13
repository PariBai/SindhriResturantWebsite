import React, { useState } from 'react';
import '../style.css';
import breakfastImage from '../assets/images/breakfast.jpg';
import saladImage from '../assets/images/salad.jpg';
import vegetarianImage from '../assets/images/vegetarian.jpg';
import karahiImage from '../assets/images/karahi.jpg';
import rice from '../assets/images/rice.jpg';
import desert from '../assets/images/desert.jpg';
import drink from '../assets/images/drink.jpg';

const Menu = () => {
  const menuData = {
    breakfast: {
      image: breakfastImage,
      dishes: [
        { name: 'Halwa Puri', price: 90 },
        { name: 'Paratha', price: 90 },
        { name: 'Omelette', price: 170 }
      ]
    },
    SindhriRice: {
      image: rice,
      dishes: [
        { name: 'Chicken Fried Rice', price: 550 },
        { name: 'Plain Rice', price: 350 },
        { name: 'Vegetable Rice', price: 450 }
      ]
    },
    veg: {
      image: vegetarianImage,
      dishes: [
        { name: 'Vegetable Curry', price: 799 },
        { name: 'Paneer Pakora', price: 950 },
        { name: 'Dall Makhni', price: 570 },
        { name: 'Paneer Steaks', price: 999 }
      ]
    },
    karahi: {
      image: karahiImage,
      dishes: [
        { name: 'Chicken Karahi', price: 1099 },
        { name: 'Beef Karahi', price: 1799 },
        { name: 'Mutton Green Karahi', price: 1799 }
      ]
    },
    Desert: {
      image: desert,
      dishes: [
        { name: 'Sizzling Brownie', price: 480 },
        { name: 'Dark Chocolate', price: 495 },
        { name: 'Qulfi', price: 90 },
        { name: 'Sindhri Special Falloda', price: 299 },
      ]
    },
    Mocktail: {
      image: drink,
      dishes: [
        { name: 'Sindhri Special Blue Wolf', price: 650 },
        { name: 'Pina Colada', price: 270 },
        { name: 'Fresh Lime', price: 250 }

      ]
    },
  };

  const [selectedCategory, setSelectedCategory] = useState('breakfast');
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleAddToOrder = (dish) => {
    setSelectedDishes([...selectedDishes, dish]);
    setTotalPrice(totalPrice + dish.price);
  };

  return (
    <div className='menu'>
      <div className='categories'>
        {Object.keys(menuData).map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? 'category active' : 'category'}
            
            onClick={() => handleCategoryClick(category)}
           
          >
            {category}
          </button>
        ))}
      </div>
      <div className='right-container'>
        <div className='category-image'>
          <img src={menuData[selectedCategory].image} alt={selectedCategory} />
        </div>
        <div className='dishes'>
          {menuData[selectedCategory].dishes.map((dish, index) => (
            <div key={index} className='dish'>
              <span className='dish-name'>{dish.name}</span>
              <span className='dish-price'>{dish.price} PKR</span>
              <button className='add-button' onClick={() => handleAddToOrder(dish)}>
                +
              </button>
            </div>
          ))}
        </div>
        <div className='order-summary'>
          <h3>Order Summary</h3>
          <ul>
            {selectedDishes.map((dish, index) => (
              <li key={index}>
                {dish.name} - {dish.price} PKR
              </li>
            ))}
          </ul>
          <p><b>Total Price: {totalPrice} PKR </b></p>
        </div>
      </div>
      

    </div>
    
  );
  
};

export default Menu;

