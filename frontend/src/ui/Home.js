import React from "react";
import { LandingPage } from "./LandingPage";
import {Cards} from "./Cards";
import LPImage from "./images/lpimage.png";
import { Services } from "./Services";

export const Home = () => {
   return (
      <>
      <section className="withIn">
         <img src={LPImage} className="itemCenter homeIcon" alt="DHT Logo"/>
         <LandingPage/>
      </section>
      <Cards/>
      <section className="bg-white p-5 mt-5 rounded-1">
         <Services/>
      </section>
      </>
   )
}