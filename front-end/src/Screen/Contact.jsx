import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="contact">
                <div className="bradcromb">
                    <h2>Contact Us</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li>|</li>
                        <li>Contact Us</li>

                    </ul>
                </div>
                <div className="contactpage">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="conta line">
                                <div className="icon">
                                    <FaLocationDot />
                                </div>
                                <h4>Location</h4>
                                <p> 29 Nicolas str, New York, 987597-50</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="conta line line-2">
                                <div className="icon">
                                    <FaPhoneAlt />
                                </div>
                                <h4>Phones</h4>
                                <p><a href="#!">+91 890-90-609</a></p>
                                <p><a href="#!">+91 890-90-608</a></p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="conta line">
                                <div className="icon">
                                    <IoMdMail />
                                </div>
                                <h4>Email</h4>
                                <p><a href="#!">sale@gmail.com</a></p>
                                <p><a href="#!">tech@gmail.com</a></p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="conta ">
                                <div className="icon">
                                    <FaRegClock />
                                </div>
                                <h4>Working Hours</h4>
                                <p>Wednesday - Sunday</p>
                                <p>7:00 AM - 5:00 PM</p>
                            </div>
                        </div>
                    </div>
                    <div className="formcontainer">
                        <div className="row ">
                            <div className="col-lg-6">
                                <div className="map h-100">
                                <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229376.55246094114!2d72.71412823032126!3d19.082482211550346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e1!3m2!1sen!2sin!4v1748698551972!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contactform">
                                    <h2>Contact <span>Now</span></h2>
                                    <form className="row g-3 mt-3">
                                        <div className="col-md-6">
                                            <label className="form-label">First Name</label>
                                            <input type="text" className="form-control" name="name" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Last Name</label>
                                            <input type="text" className="form-control" name="name" required />
                                        </div>



                                        <div className="col-md-6">
                                            <label className="form-label">Email</label>
                                            <input type="email" className="form-control" name="img" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Mobile Number</label>
                                            <input type="email" className="form-control" name="img" required />
                                        </div>
                                        <div className="col-md-12">
                                            <label className="form-label">Message</label>
                                            <textarea type="text" rows={6} className="form-control" name="img" required />
                                        </div>





                                        <button class="btn w-auto text-center m-auto addtocart justify-center mt-4">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </>
    )
}

export default Contact