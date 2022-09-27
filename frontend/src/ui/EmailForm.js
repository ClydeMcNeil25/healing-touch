import React from "react";
import Button from 'react-bootstrap/Button';

export function EmailForm() {
   return (
      <>
        <section className="contact-form lead text-white p-5 lead d-flex justify-content-center" id="contact-me">
            <form method="POST" className="p-2 w-75" action="https://formsubmit.co/healingtouch780@gmail.com" enctype="multipart/form-data">

                <h1 className="contact-title text-center mb-5 pb-5">Schedule an Appointment</h1>

                <div className="row d-flex">
                    <div className="col-md-6 vstack mb-2">
                        <label for="firstname" class="form-label text-white">First Name</label>
                        <input className="form-control" id="firstname" name="firstname" type="text" placeholder="First Name"/>
                    </div>
                    <div class="col-md-6 vstack mb-2">
                        <label for="lastname" class="form-label text-white">Last Name</label>
                        <input className="form-control" id="lastname" name="lastname" type="text" placeholder="Last Name"/>
                    </div>
                </div>
                <div className="row d-flex">
                <div className="col-md-6 vstack mb-2">
                        <label for="emailInput" class="form-label text-white">Email Address</label>
                        <input type="email" className="form-control" id="emailInput" name="email" placeholder="Your email"/>
                    </div>
                    <div className="col-md-6 vstack">
                            <label for="category" class="form-label">Choose Interest</label>
                            <select className="form-control" id="category" name="category">
                                <option value="Choose Inquiry" class="text-white">Choose Inquiry</option>
                                <option value="Massage Packages">Massage Packages</option>
                                <option value="Price Quote">Price Quote</option>
                                <option value="Services">Services</option>
                                <option value="Other">Other</option>
                            </select>
                    </div>
                </div>
                <div className="text-start mb-5">
                        <label for="messageInput" class="form-label text-white">Message</label>
                        <textarea name="message" required rows="3" maxlength="2000" className="form-control" id="messageInput" placeholder="2000 Character Max"></textarea>
                </div>
                    <div class="container-fluid lead d-flex justify-content-center">
                    <Button variant="primary" className="button" type="submit">Submit</Button>
                </div>
            </form>
        </section>
      </>
   )
}