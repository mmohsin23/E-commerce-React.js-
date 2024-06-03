import React from 'react'

const footer = () => {
  return (
    <div className='footer-section'>
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="footer-logo">
                        <img src="/Images/main-logo.png" alt="" />
                    </div>
                </div>
                <div className="col-lg-4">
                    <ul>
                        <h4>
                            Useful Links
                        </h4>
                        <li className='footer-list-item'>
                            Home
                        </li>
                        <li className='footer-list-item'>
                            About Us                    
                        </li>
                        <li className='footer-list-item'>
                            Shop                
                        </li>
                        <li className='footer-list-item'>
                            Return and Exchange Policy                    
                        </li>
                        <li className='footer-list-item'>
                            Privacy Policy
                        </li>
                        <li className='footer-list-item'>
                            Shipping
                        </li>
                    </ul>
                </div>
                <div className="col-lg-4">
                    <h3 className="footerContact">
                        Contact Us
                    </h3>
                    <p className="footerContact-Desc">
                        Don't miss out our Future Updates! Get Subscribed Today!
                    </p>
                    <div className="footer-input">
                        <input type="email" placeholder="Enter Your Email" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <p>
                ©2024 AL Safiya Apparel. All Rights Reserved.
            </p>
        </div>
    </div>
  )
}

export default footer