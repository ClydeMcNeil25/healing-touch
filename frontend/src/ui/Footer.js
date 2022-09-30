import React from "react";
import { Link } from 'react-router-dom'
import FBLogo from './images/fblogo.png'
import IGLogo from './images/iglogo.png'
import KSLogo from './images/kslogo.png'

export const Footer = () => {
   return (
      <>
      <footer className="navBackground p-5 text-center" id="footer">
            <h3 className="text-white text-center">Follow Us</h3>
            <div>
                <Link to ={''}><img src={FBLogo} className="m-3 bg-white rounded-1" alt="FB Logo" width="100px"/></Link>
                <Link to ={''}><img src={IGLogo} className="m-3 bg-white rounded-4" alt="IG Logo" width="100px"/></Link>
            </div>

            <Link to ={'/contact'} className="text-white">Contact</Link>

            <div className="mt-5">
                <Link to ={'https://www.itskrucial.com/'} 
                    className="text-white">
                    <img src={KSLogo} 
                    alt="KS Logo" 
                    width="50px"/>Designed by Krucial Studios
                </Link>
            </div>
      </footer>
      </>
   )
}