import React from "react"
import Bio from './images/kslogo.png'

export function About() {
   return (
      <>
      <img src={Bio} alt="KS Logo"/>
        <h1 className="text-white text-center">We're going to list some amazing stuff about you.</h1>
      </>
   )
}