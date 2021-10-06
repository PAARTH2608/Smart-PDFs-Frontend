import React from 'react';
import './component-styles/socials.css'
import { FaGithub, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGlobe } from 'react-icons/fa'
const Socials = () => {
    return (
        <div className="social-icons">
            <li className="facebook icon">
                <FaFacebook/>
            </li>
            <li className="twitter icon">
                <FaTwitter/>
            </li>
            <li className="linkedin icon">
                <FaLinkedin/>
            </li>
            <li className="github icon">
                <FaGithub/>
            </li>
            <li className="instagram icon">
                <FaInstagram/>
            </li>
            <li className="globe icon">
                <FaGlobe/>
            </li>
            
        </div>
    )
}
export default Socials;