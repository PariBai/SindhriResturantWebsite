import React from 'react';
import '../style.css';

const CartModal = ({ cartItems, onClose }) => {
  return (
    <div className='modal-overlay'>
      <div className='cart-modal'>
        <div className='cart-header'>
          <h2>Your Cart</h2>
          <button className='close-button' onClick={onClose}>Close</button>
        </div>
        <div className='cart-content'>
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  {item.name} - {item.price} PKR
                </li>
              ))}
            </ul>
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
