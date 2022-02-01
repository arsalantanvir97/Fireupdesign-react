import React, { useState } from "react";
// import {postContact} from '../../Actions/Contact'

import { connect } from "react-redux";
import PropTypes from "prop-types";
import Banner from "../../Components/Banner";

const Contact = ({ postContact }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  });

  // const {email,password} = formData
  const onchange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // postContact(formData)
    e.target.reset();
  };
  return (
    <>
      <div>
        <section id="lets-connect" className="content-body pb-extra">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-11 col-xl-10  mx-auto col-custom">
                <div className="row fade-in">
                  <div className="col-12 text-center mb-5 mt-5">
                    <h3 className="heading-3">
                      Let’s create your story together
                    </h3>
                    <p className="body-text-18">
                      Get in touch and lets get those creative juices flowing
                    </p>
                  </div>
                  <div className="col-lg-8 mb-4 mb-lg-0">
                    <form action="#" className="contact_form">
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <input
                            type="text"
                            className="fireup-input"
                            placeholder="Full Name"
                          />
                        </div>
                        <div className="col-md-6 mb-4">
                          <input
                            type="email"
                            className="fireup-input"
                            placeholder="Email Address"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <input
                            type="number"
                            className="fireup-input"
                            placeholder="Phone Number"
                          />
                        </div>
                        <div className="col-md-6 mb-4">
                          <input
                            type="text"
                            className="fireup-input"
                            placeholder="Select Service"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 mb-4">
                          <textarea
                            name
                            id
                            className="fireup-textarea"
                            placeholder="Description Of Project"
                            cols={30}
                            rows={6}
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 text-center">
                          <button type="submit" className="form-submit">
                            Submit Request{" "}
                            <i className="fas fa-chevron-right ml-2" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-4">
                    <ul className="connect">
                      <li>
                        <a href="mailto:hello@fireupdesign.com">
                          hello@fireupdesign.com
                        </a>
                      </li>
                      <li>
                        <a href="telto:+447912108120">+44 79 121 08 120</a>
                      </li>
                      <li>
                        <a href="telto:+441276489005">+44 1276 489 005</a>
                      </li>
                      <li>
                        <p className="social-heading">Connect with us</p>
                        <ul className="social">
                          <li>
                            <a
                              href="https://twitter.com/fireupdesign?s=08"
                              target="_blank"
                            >
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.facebook.com/fireupdesign/"
                              target="_blank"
                            >
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://instagram.com/fireupdesign?igshid=198v0grqib17l"
                              target="_blank"
                            >
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content-body pt-0" id="subscribe">
          <div className="container-fluid position-relative p-0">
            <div className="row no-gutters">
              <div className="col-12 talk-banner">
                <img src="images/subscribe-bg.jpg" className alt="" />
              </div>
            </div>
            <div className="custom-container-wrap subscribe-wrap pb-5">
              <div className="row">
                <div className="col-12 col-lg-6 m-auto mb-4 mb-lg-5 subscribe">
                  <h3 className="heading-3 text-center">Let's talk design</h3>
                  <p className="text-center font-weight-regular body-text-16">
                    Subscribe to our newsletter today and never miss out on
                    design news &amp; updates
                  </p>
                  <form action className="position-relative mt-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email Address Here....."
                    />
                    <button type="sumit" className="btn-submit">
                      Subscribe! <i className="fas fa-chevron-right ml-2" />
                    </button>
                  </form>
                </div>
              </div>
              <div className="row mt-3 mt-lg-0">
                <div className="col-12 col-lg-4 text-center d-flex mb-3 mb-lg-0">
                  <div className="contact-card mx-0 mx-xl-2 w-100">
                    <h4 className="heading-4">Start live Chat</h4>
                    <p className="body-text-16 font-weight-regular">
                      with one of our representative and get all <br />
                      the assistance that you need.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-4 text-center d-flex mb-3 mb-lg-0">
                  <div className="contact-card mx-0 mx-xl-2 w-100">
                    <h4 className="heading-4">Call us now</h4>
                    <p className="body-text-16 font-weight-regular">
                      for any queries that you may have
                    </p>
                    <a className="link" href="telto:+441276489005">
                      +44 1276 489 005
                    </a>
                  </div>
                </div>
                <div className="col-12 col-lg-4 text-center d-flex mb-3 mb-lg-0">
                  <div className="contact-card mx-0 mx-xl-2 w-100">
                    <h4 className="heading-4">Email us</h4>
                    <p className="body-text-16 font-weight-regular">
                      {" "}
                      <a href="mailto:hello@fireupdesign.com">
                        hello@fireupdesign.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

Contact.propTypes = {
  postContact: PropTypes.func.isRequired,
};

export default Contact;

//    <div className="user-login-page">
//    <section className="user-login-section">
//        <div className="container position-relative p-sm-0">
//            <div className="user-login">
//                <div className="row g-sm-0">
//                    <div className="col-12">
//                        <div className="user-login-inner">
//                            <div className="title text-center mb-5 contact-title">
//                                <h2>Contact Us</h2>
//                                <p className="my-3">Get In Touch</p>
//                                <h3>Got Any Queries? Fill the form below!</h3>
//                            </div>
//                            <form onSubmit={(e)=>onSubmit(e)}>
//                                <div className="row mb-4">
//                                    <div className="col-md-6 mb-4 mb-md-0">
//                                        <div className="form-field">
//                                            <label htmlFor="f-name" className="ps-2 mb-2">First Name*:</label>
//                                            <input type="text" id="f-name" placeholder="Enter First Name"  name="firstname" onChange={(e)=>onchange(e)} required/>
//                                        </div>
//                                    </div>
//                                    <div className="col-md-6">
//                                        <div className="form-field">
//                                            <label htmlFor="l-name" className="ps-2 mb-2">Last Name*:</label>
//                                            <input type="text" id="l-name" placeholder="Enter Last Name" name="lastname"  onChange={(e)=>onchange(e)}  required/>
//                                        </div>
//                                    </div>
//                                </div>
//                                <div className="form-field mb-4">
//                                    <label htmlFor="email" className="ps-2 mb-2">Email Address*:</label>
//                                    <input type="email" id="email" placeholder="Enter Email Address" name="email" onChange={(e)=>onchange(e)} required/>
//                                </div>
//                                <div className="form-field mb-4">
//                                    <label htmlFor="subject" className="ps-2 mb-2">Subject*:</label>
//                                    <input type="text" id="subject" placeholder="Enter Subject"  name="subject" onChange={(e)=>onchange(e)} required/>
//                                </div>
//                                <div className="form-field mb-4">
//                                    <label htmlFor="message" className="ps-2 mb-2">Message*:</label>
//                                    <textarea id="message" rows={7} placeholder="Enter Your Message Here"  name="message" onChange={(e)=>onchange(e)} required />
//                                </div>
//                                <div className="text-center">
//                                    <button type="submit" className="sign-btn mt-4">Submit</button>
//                                </div>
//                            </form>
//                        </div>
//                    </div>
//                </div>
//            </div>
//        </div>
//    </section>
// </div>
