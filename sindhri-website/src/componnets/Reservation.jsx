import React, { useState } from 'react';
import '../style.css';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    startTime: '',
    endTime: '',
    numberOfPeople: '',
    specialInstructions: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic here to submit the form data
    alert('Table booked!'); // For demonstration purposes only
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      startTime: '',
      endTime: '',
      numberOfPeople: '',
      specialInstructions: ''
    });
  };

  return (
    <section className='reservation' id='reservation'>
        
      <div className='content'>
        <h3>Reservation</h3>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Your Name:</label>
            <input type='text' id='name' name='name' value={formData.name} onChange={handleChange} placeholder='Your Name' required />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Your Email:</label>
            <input type='email' id='email' name='email' value={formData.email} onChange={handleChange} placeholder='Your Email' required />
          </div>
          <div className='form-group'>
            <label htmlFor='phone'>Your Phone Number:</label>
            <input type='tel' id='phone' name='phone' value={formData.phone} onChange={handleChange} placeholder='Your Phone Number' required />
          </div>
          <div className='form-group'>
            <label htmlFor='date'>Date:</label>
            <input type='date' id='date' name='date' value={formData.date} onChange={handleChange} required />
          </div>
          <div className='form-group'>
            <label htmlFor='startTime'>Start Time:</label>
            <input type='time' id='startTime' name='startTime' value={formData.startTime} onChange={handleChange} placeholder='Start Time' required />
            <label htmlFor='endTime'>End Time:</label>
            <input type='time' id='endTime' name='endTime' value={formData.endTime} onChange={handleChange} placeholder='End Time' required />
          </div>
          <div className='form-group'>
            <label htmlFor='numberOfPeople'>Number of People:</label>
            <input type='number' id='numberOfPeople' name='numberOfPeople' value={formData.numberOfPeople} onChange={handleChange} placeholder='Number of People' required />
          </div>
          <div className='form-group'>
            <label htmlFor='specialInstructions'>Any Special Instructions:</label>
            <textarea id='specialInstructions' name='specialInstructions' value={formData.specialInstructions} onChange={handleChange} placeholder='Any Special Instructions'></textarea>
          </div>
          <div className='form-group'>
            <button type='submit' className='btn'>Book Table</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Reservation;
