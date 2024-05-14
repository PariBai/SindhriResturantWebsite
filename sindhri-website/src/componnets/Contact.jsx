import React from 'react'

const Contact = () => {
  return <>
  <section className='contact' id='contact'>
    <h1 className='heading'>
        <span>Contact</span> Us 
    </h1>
    <div className='row'>
    <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.3133397886354!2d68.81264357497614!3d27.73847982411861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39342b5440eab243%3A0xe715844e47bd7ee3!2sSindhri%20Restaurant%20Sukkur%20Sindh!5e0!3m2!1sen!2s!4v1715516995287!5m2!1sen!2s"></iframe>

        <form>
        <h3>Get in Touch</h3>
        <div className='inputBox'>
            
            <input type='text' placeholder='Name'></input>
        </div>
        <div className='inputBox'>
            I
            <input type='email' placeholder='Email'></input>
        </div>
        <div className='inputBox'>
            
            <input type='text' placeholder='Number'></input>
        </div>
        <input type='submit' value='contact now' className='btn'/>
        </form>
    </div>
  </section>
  </>
}

export default Contact;