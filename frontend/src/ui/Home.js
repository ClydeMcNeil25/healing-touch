import React from "react"
import { LandingPage } from "./LandingPage"
import {Cards} from "./Cards"

export const Home = () => {
   return (
      <>
      <section className="withIn">
         <p className="w-100 fs-1 itemCenter text-white">Welcome to Daniel's Healing Touch</p>
         <LandingPage/>
      </section>
      
      <section>
      <Cards/>
      </section>
      </>
   )
}