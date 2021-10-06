import React from 'react';
import './component-styles/contact-info.css'
const ContactInfo = () => {
    return (
        <div className="contact-info">
            <div className="contact-info-item">
                <h1>Email</h1>
                <p>jain.paarth2608@gmail.com</p>
            </div>
            <div className="contact-info-item">
                <h1>Phone</h1>
                <p>+91 9997344940</p>
            </div>
            <div className="contact-info-item">
                <h1>Address</h1>
                <p>202, Phoenix Palm Pushpanjali Gardenia, Karkunj, Agra</p>
            </div>
        </div>
    )
}
export default ContactInfo;