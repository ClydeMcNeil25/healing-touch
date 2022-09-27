import React from "react";
import { Link } from 'react-router-dom'
import KSLogo from './images/kslogo.png'

export const Footer = () => {
   return (
      <>
      <footer className="bg-black p-5 mt-5" id="footer">
            <h1 className="text-white text-center">We're going to list socials</h1>

            <div className="text-center mt-5">
                <Link to ={'https://www.itskrucial.com/'} 
                    className="text-white">
                    <img src={KSLogo} 
                    alt="KS Logo" 
                    width="75px"/>Designed by Krucial Studios
                </Link>
            </div>
      </footer>
      </>
   )
}