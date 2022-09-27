import React from "react";
import { LandingPage } from "./LandingPage";
import {Cards} from "./Cards";
import LPImage from "./images/lpimage.png";

export const Home = () => {
   return (
      <>
      <section className="withIn">
         <img src={LPImage} className="itemCenter w-50" alt="DHT Logo"/>
         <LandingPage/>
      </section>
      <Cards/>
      <section className="bg-white p-5 mt-5 rounded-1">

      </section>
      </>
   )
}