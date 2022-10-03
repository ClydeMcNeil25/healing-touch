import React from "react";
import Pic01 from "./images/placeholder01.jpg"
import Card from 'react-bootstrap/Card'

export const Services = () => {
   return (
      <>
    <div className="mb-5">
        <h1 className="text-center">Available Services</h1>
    </div>
    <section className="d-flex justify-content-center">
        <div className="conatiner w-100">
            <div className="row mb-5">
                <div className="col-md-3 d-flex justify-content-center">
                    <Card className="cardWidth02">
                        <Card.Img variant="top" 
                        src={Pic01} 
                        className="serviceImg mb-3 w-100" 
                        alt="Service"/>
                        <Card.Body>
                            <Card.Title>
                                <strong>Swedish Massage</strong>
                            </Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3 d-flex justify-content-center">
                    <Card className="cardWidth02">
                        <Card.Img variant="top" 
                        src={Pic01} 
                        className="serviceImg mb-3 w-100" 
                        alt="Service"/>
                        <Card.Body>
                            <Card.Title>
                                <strong>Swedish Massage</strong>
                            </Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3 d-flex justify-content-center">
                    <Card className="cardWidth02">
                        <Card.Img variant="top" 
                        src={Pic01} 
                        className="serviceImg mb-3 w-100" 
                        alt="Service"/>
                        <Card.Body>
                            <Card.Title>
                                <strong>Swedish Massage</strong>
                            </Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3 d-flex justify-content-center">
                    <Card className="cardWidth02">
                        <Card.Img variant="top" 
                        src={Pic01} 
                        className="serviceImg mb-3 w-100" 
                        alt="Service"/>
                        <Card.Body>
                            <Card.Title>
                                <strong>Swedish Massage</strong>
                            </Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>

        <hr></hr>

    </section>
      </>
   )
}