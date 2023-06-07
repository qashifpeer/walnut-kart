import React from 'react'
import "./footer.css"
import{FaDiscord, FaInstagram, FaYoutube} from "react-icons/fa"

const Footer = () => {
  return (
    <div>
        <footer>
            <div className='footer-container grid grid-four-cols'>
                <div className="footer-about">
                    <h3>walnut Kart</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, distinctio!</p>
                </div>

                <div className="footer-subscribe">
                    <h3>subscribe to get important updates</h3>
                    <form action="" >
                        <input type="email" placeholder='your email'/>
                        <input type='submit' value='subscribe'></input>
                    </form>
                </div>

                <div className="footer-social">
                    <h3>follow us</h3>
                    <div className="footer-social--icons">
                        <div>
                        <FaDiscord className='icons' />
                        </div>
                        <div>
                        <FaYoutube className='icons' />
                        </div>
                        <div>
                        <FaInstagram className='icons'  />
                        </div>
                    </div>
                </div>

                <div className="footer-contact">
                    <h3>call us</h3>
                    {/* <a href='tel:9909909909'>+91 9909909909</a> */}
                    <h3>+91 9909909909</h3>
                </div>
                
            </div>
            {/* bottom footer */}
            <div className="bottom-footer--section">
                    <hr />
                    <div className="container grid grid-2-cols">
                        <p>@{new Date().getFullYear()} walnutkart. All Rights reserved</p>
                   
                    <div>
                        <p>privacy policy</p>
                       <p> terms & condtions</p>
                    </div>
                    </div>
                </div>
        </footer>
    </div>
  )
}

export default Footer