import React from "react"
import { LandingPage } from "./LandingPage"
import {Cards} from "./Cards"
import LPImage from "./images/lpimage.png"
import {EmailForm} from "./EmailForm"

export const Home = () => {
   return (
      <>
      <section className="withIn">
         <img src={LPImage} className="itemCenter w-50" alt="DHT Logo"/>
         <LandingPage/>
      </section>
      
      <section>
      <Cards/>
      </section>
      <EmailForm/>
      </>
   )
}