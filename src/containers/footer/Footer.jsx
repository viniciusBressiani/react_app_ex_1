import React from 'react';
import './footer.css';
import escmLogo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className="escm__footer section__padding">
      <div className="escm__footer-heading">
        <h2 className="gradient__text">Do you want to step in to the future before others</h2>
      </div>
      <div className="escm__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="escm__footer-links">
        <div className="escm__footer-links_logo">
          <img src={escmLogo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="escm__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="escm__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="escm__footer-links_div">
          <h4>Links</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="escm__footer-copyright">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
