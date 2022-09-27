import React from "react"
import { LandingPage } from "./LandingPage"
import {Cards} from "./Cards"

export const Home = () => {
   return (
      <>
      <section>
         <h1 className="text-white text-center position-relative">Welcome to Daniel's Healing Touch</h1>
         <LandingPage/>
      </section>

      <Cards/>
      </>
   )
}