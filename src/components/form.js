import React from 'react';
import './component-styles/form.css';
import emailjs from 'emailjs-com'

const Form = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  console.log(e.target)

    emailjs.sendForm(
      'service_1xkgj5o', 
      'template_81m1pcd', 
      e.target, 
      'user_GePdVnFO20zWgEiPTjb6l'
    ).then(res => {
      console.log(res)
    }).catch(err => console.log(err))
  }
    return (
      <form className="info-form" onSubmit={submitHandler}>
        <div className="input-header">
            <h1>Ask Your Queries</h1>
        </div>
        <div className="input-group">
          <input type="text" placeholder="Name" name="name" className="input-control" required />
        </div>
        <div className="input-group">
          <input type="text" placeholder="Email" name="user_email" className="input-control" required />
        </div>
        <div className="input-group">
          <input type="text" placeholder="Subject" name="subject" className="input-control" required />
        </div>
        <div className="input-group">
          <textarea className="input-control" name="message" required rows="10" placeholder="Message"></textarea>
        </div>
        <div className="submit-button">
          <button className="btn" type="submit" value="Send">Send Message</button>
        </div>
      </form>
    )
}
export default Form;