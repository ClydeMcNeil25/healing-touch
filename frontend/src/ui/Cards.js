import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PHImage from './images/placeholder01.jpg'

export function Cards() {
   return (
      <>
    <p className="fs-1 mt-5 text-white text-center">Most Popular Services</p>

      <div className="container">
        <div className="row mt-5 gap-4">

            <div className="col">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={PHImage} />
                    <Card.Body className="text-center">
                        <Card.Title>30 Min Massage</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        <Button variant="primary">Learn More</Button>
                    </Card.Body>
                </Card>
            </div>
            
            <div className="col">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={PHImage}  />
                    <Card.Body className="text-center">
                        <Card.Title>60 Min Massage</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        <Button variant="primary">Learn More</Button>
                    </Card.Body>
                </Card>
            </div>
            
            <div className="col">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={PHImage}  />
                    <Card.Body className="text-center">
                        <Card.Title>90 Min Massage</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        <Button variant="primary">Learn More</Button>
                    </Card.Body>
                </Card>
            </div>
            
            <div className="col">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={PHImage}  />
                    <Card.Body className="text-center">
                        <Card.Title>Back & Neck Massage</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                        <Button variant="primary">Learn More</Button>
                    </Card.Body>
                </Card>
            </div>
            
        </div>
    </div>
      </>
   )
}