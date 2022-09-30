import React from "react";
import Pic01 from "./images/placeholder01.jpg"

export const Services = () => {
   return (
      <>
      <section className="d-flex justify-content-center">
        <div className="conatiner w-75">
            <div className="row mb-5">
                <div className="col-md-6">
                    <img src={Pic01} className="w-100 rounded-3 mb-3" alt="Service"/>
                </div>
                <div className="col-md-6 d-flex align-items-center vstack">
                    <h2 className="text-center mb-3">Deep Tissue Massage</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu facilisis sed odio morbi quis commodo odio aenean sed. Lacus sed turpis tincidunt id aliquet. Facilisi morbi tempus iaculis urna id. Eu sem integer vitae justo eget magna fermentum iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu facilisis sed odio morbi quis commodo odio aenean sed. Lacus sed turpis tincidunt id aliquet. Facilisi morbi tempus iaculis urna id. Eu sem integer vitae justo eget magna fermentum iaculis.</p>
                </div>
            </div>
        </div>

        <hr></hr>

      </section>
      </>
   )
}