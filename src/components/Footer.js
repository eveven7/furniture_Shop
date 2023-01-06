import React from 'react'

import { FiMail, FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi'
import './FooterStyles.css'


const Footer = () => {
    return (
        <div className='footer'>
        <div className="container">
                <div className="wrapper">
                    <div class="button">
                        <div class="icon">
                            <i>  <FiInstagram className='social-icon-ig' /></i>
                        </div>
                        <span>Instagram</span>
                    </div>

                    <div class="button">
                        <div class="icon">
                            <i>  <FiFacebook className='social-icon-fb' />
                            </i>
                        </div>
                        <span>Facebook</span>
                    </div>

                    <div class="button">
                        <div class="icon">
                            <i>  <FiTwitter className='social-icon-tw' /></i>
                        </div>
                        <span>Twitter</span>
                    </div>

                    <div class="button">
                        <div class="icon">
                            <i>  <FiLinkedin className='social-icon-ln' /></i>
                        </div>
                        <span>LinkedIn</span>
                    </div>

                    <div class="button">
                        <div class="icon">
                            <i>  <FiYoutube className='social-icon-yt' /></i>
                        </div>
                        <span>YouTube</span>
                    </div>
                </div>

                
                   
                </div><form>
                       <h3>Subscribe to our newsletters</h3>

                       <input type="email" placeholder='Enter your email' />
                    <FiMail className='mail-icon' />
             </form>
                </div>

        
    )
}

export default Footer