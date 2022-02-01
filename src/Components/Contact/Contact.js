import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import DatePicker from "react-datepicker";
import { toast } from "react-toastify";
// import { DatePicker } from 'react-datepicker';

const Contact = ({ Selected_service }) => {
  const { handleSubmit, register, errors } = useForm();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [budget, setBudget] = useState("");
  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);

  useEffect(() => {
    // setService(Selected_service);
  }, []);
  const contactSubmit = async (formData, e) => {
    formData["startDate"] = startDate;
    formData["endDate"] = endDate;
    // console.log(formData);

    try {
      document.getElementById("preloader").classList.toggle("d-none");
      // const { data } = await axios.post('http://localhost:3001/contact.php', formData);
      const { data } = await axios.post("/api/contact.php", formData);
      toast.success("Thank you for contacting with us. we will be in touch.");
      e.target.reset();
      setName("");
      setEmail("");
      setMessage("");
      setPhone("");
      setBudget("");
      setService("");
      setStartDate("");
      setStart(false);
      setEnd(false);
      setEndDate("");
      document.getElementById("preloader").classList.toggle("d-none");
    } catch (error) {
      toast.error("Something went wrong!");
      document.getElementById("preloader").classList.toggle("d-none");
    }
  };
  return (
    <section id="lets-connect" className="content-body pb-extra">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-9 mx-auto col-custom">
            <div className="row fade-in">
              <div className="col-12 text-center mb-5">
                <h3 className="heading-3">Let’s create your story together</h3>
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name="name"
                        ref={register({ required: true })}
                      />
                      {errors.name && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                    </div>

                    <div className="col-md-6 mb-4">
                      <input
                        type="email"
                        className="fireup-input"
                        placeholder="Email Address"
                        placeholder="Email"
                        name="email"
                        ref={register({
                          required: "This field is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "invalid email address",
                          },
                        })}
                        // value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {errors.email && (
                        <span className="text-danger">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <input
                        type="number"
                        className="fireup-input"
                        placeholder="Phone Number"
                        name="phone"
                        ref={register({ required: true, maxLength: 15 })}
                        // value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      {errors.phone && errors.phone.type === "required" && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                      {errors.phone && errors.phone.type === "maxLength" && (
                        <span className="text-danger">Max Limit is 15</span>
                      )}
                    </div>
                    <div className="col-md-6 mb-4">
                      {/* <input
                          type="text"
                          className="fireup-input"
                          placeholder="Select Service"
                        /> */}
                      <select
                        ref={register({ required: true })}
                        name="service"
                        className="form-control form-group"
                        value={service}
                        placeholder="select service"
                        onChange={(e) => {
                          setService(e.target.value);
                        }}
                      >
                        <option value="">Select Service</option>
                        <option value="Graphic Design">Graphic Design</option>
                        <option value="Web Design & Development">
                          Web Design & Development
                        </option>
                        <option value="Mobile App Development">
                          Mobile App Development
                        </option>
                        <option value="Search Engine Optimization (SEO)">
                          Search Engine Optimization (SEO)
                        </option>
                        <option value="Social Media Marketing(SMM)">
                          Social Media Marketing(SMM)
                        </option>
                        <option value="Merchandise">Merchandise</option>
                        <option value="Domain Names and Hosting">
                          Domain Names and Hosting{" "}
                        </option>
                        <option value="Website Copy/Copywriting">
                          Website Copy/Copywriting
                        </option>
                      </select>
                      {errors.service && (
                        <span className="text-danger">
                          The field is required.
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 mb-4">
                      <input
                        className="fireup-textarea"
                        placeholder="Budget"
                        name="budget"
                        ref={register({ required: true })}
                        // value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                      />
                      {errors.budget && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 mb-4">
                      <textarea
                        name
                        id
                        className="fireup-textarea"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        name="message"
                        ref={register({ required: true })}
                        cols={30}
                        rows={6}
                        defaultValue={""}
                      />
                      {errors.message && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
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
                    <a href="mailto:Hello@fireupdesign.com">
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

    //     <form className="row" onSubmit={handleSubmit(contactSubmit)}>
    //         <div
    //             className="col-12 form-group"
    //             data-wow-duration="1s"
    //             data-wow-delay="0.2s">
    //             <label>
    //                 <i className="fa fa-user" aria-hidden="true" />
    //             </label>
    //             <input
    //                 type="text"
    //                 className="form-control form-group"
    //                 placeholder="Full Name"
    //                 // value={name}
    //                 onChange={e => setName(e.target.value)}
    //                 name="name"
    //                 ref={register({ required: true })}
    //             />
    //             {errors.name && <span className="text-danger">This field is required</span>}
    //         </div>
    //         <div
    //             className="col-12 form-group"
    //             data-wow-duration="1s"
    //             data-wow-delay="0.4s"
    //         >
    //             <label>
    //                 <i className="fa fa-envelope" aria-hidden="true" />
    //             </label>
    //             <input
    //                 type="text"
    //                 className="form-control form-group"
    //                 placeholder="Email"
    //                 name="email"
    //                 ref={register({
    //                     required: "This field is required",
    //                     pattern: {
    //                         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    //                         message: "invalid email address"
    //                     }
    //                 })}
    //                 // value={email}
    //                 onChange={e => setEmail(e.target.value)}
    //             />
    //             {errors.email && <span className="text-danger">{errors.email.message}</span>}
    //         </div>
    //         <div
    //             className="col-12 form-group"
    //             data-wow-duration="1s"
    //             data-wow-delay="0.4s"
    //         >
    //             <label>
    //                 <i className="fa fa-phone-square" aria-hidden="true" />
    //             </label>
    //             <input
    //                 type="number"
    //                 className="form-control form-group"
    //                 placeholder="Phone Number"
    //                 name="phone"
    //                 ref={register({ required: true , maxLength: 15})}
    //                 // value={phone}
    //                 onChange={e => setPhone(e.target.value)}
    //             />
    //             {errors.phone && errors.phone.type === "required" && <span className="text-danger">This field is required</span>}
    //             {errors.phone && errors.phone.type === "maxLength" && <span className="text-danger">Max Limit is 15</span> }
    //         </div>
    //         <div
    //             className="col-12 form-group"
    //             data-wow-duration="1s"
    //             data-wow-delay="0.6s">
    //             <label>
    //                 <i className="fa fa-envelope" aria-hidden="true" />
    //             </label>
    //             <select ref={register({ required: true })} name="service" className="form-control form-group" value={service} placeholder="select service"
    //                 onChange={e => { setService(e.target.value) }}>
    //                 <option value="">Select Service</option>
    //                 <option value="Graphic Design">Graphic Design</option>
    //                 <option value="Web Design & Development">Web Design & Development</option>
    //                 <option value="Mobile App Development">Mobile App Development</option>
    //                 <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
    //                 <option value="Social Media Marketing(SMM)">Social Media Marketing(SMM)</option>
    //                 <option value="Merchandise">Merchandise</option>
    //                 <option value="Domain Names and Hosting">Domain Names and Hosting </option>
    //                 <option value="Website Copy/Copywriting">Website Copy/Copywriting</option>
    //             </select>
    //             {errors.service && <span className="text-danger">The field is required.</span>}
    //         </div>

    //         <div
    //             className="col-12 form-group"
    //             data-wow-duration="1s"
    //             data-wow-delay="0.4s"
    //         >
    //             <label>
    //             <i class="fa fa-gbp" aria-hidden="true"></i>
    //                 {/* <i className="fa fa-usd" aria-hidden="true" /> */}
    //             </label>
    //             <input
    //                 type="number"
    //                 className="form-control form-group"
    //                 placeholder="Budget"
    //                 name="budget"
    //                 ref={register({ required: true})}
    //                 // value={budget}
    //                 onChange={e => setBudget(e.target.value)}
    //             />
    //             {errors.budget && <span className="text-danger">This field is required</span>}
    //         </div>
    //         <div
    //             className="col-12 form-group d-md-flex align-items-center"
    //             data-wow-duration="1s"
    //             data-wow-delay="0.6s">
    //             <label>
    //                 <i className="fa fa-calendar" aria-hidden="true" />
    //             </label>
    //             <DatePicker
    //                 className={Selected_service ? "form-control form-group dateWidthModal " : "form-control form-group dateWidthHome"}
    //                 name="startDate"
    //                 ref={register({ required: true })}
    //                 disabled={start}
    //                 showPopperArrow={false}
    //                 selected={startDate}
    //                 placeholderText=" Ideal Start Date"
    //                 onChange={date => setStartDate(date)}
    //             />
    //             <label class="check contact-right">No Huge Rush
    //             <input type="checkbox"
    //                     checked={start}
    //                     onChange={e => setStart(!start)}
    //                 />
    //                         <span class="checkmark"></span>
    //                       </label>
    //             {errors.startDate && <span className="text-danger">The field is required.</span>}
    //         </div>

    //         <div
    //             className="col-12 form-group d-md-flex align-items-center"
    //             data-wow-duration="1s"
    //             data-wow-delay="0.6s">
    //             <label>
    //                 <i className="fa fa-calendar" aria-hidden="true" />
    //             </label>
    //             <DatePicker
    //                 className={Selected_service ? "form-control form-group dateWidthModal" : "form-control form-group dateWidthHome"}
    //                 name="endDate"
    //                 disabled={end}
    //                 placeholderText=" Ideal End Date"
    //                 ref={register({ required: true })}
    //                 showPopperArrow={false}
    //                 selected={endDate}
    //                 onChange={date => setEndDate(date)}
    //             />
    //             <label class="check contact-right">No Huge Rush
    //             <input type="checkbox"
    //                     checked={end}
    //                     onChange={e => setEnd(!end)}
    //                 />
    //                         <span class="checkmark"></span>
    //                       </label>

    //             {/* <label className="contact-right">
    //                 <input type="checkbox"
    //                     checked={end}
    //                     onChange={e => setEnd(!end)}
    //                 />
    //                 No huge rush
    //    </label> */}
    //             {errors.endDate && <span className="text-danger">The field is required.</span>}
    //         </div>

    //         <div
    //             className="col-12 form-group"
    //             data-wow-duration="1s"
    //             data-wow-delay="0.8s"
    //         >
    //             <label>
    //                 <i className="fa fa-commenting" aria-hidden="true" />
    //             </label>
    //             <textarea
    //                 className="form-control form-group"
    //                 placeholder="Description of Project"
    //                 // value={message}
    //                 onChange={e => setMessage(e.target.value)}
    //                 name="message"
    //                 ref={register({ required: true })}
    //             />
    //             {errors.message && <span className="text-danger">This field is required</span>}
    //         </div>
    //         <div className="col-xl-8 col-12 form-group" data-wow-duration="1s" data-wow-delay="0.8s">
    //             <button type="submit" className="hvr-sweep-to-right send-btn">Submit Request
    //             <i className={Selected_service ? "contactArrowModal fa fa-arrow-right" : "contactArrow fa fa-arrow-right"} aria-hidden="true" />
    //             </button>
    //         </div>
    //         {/* <div
    //             className="col-12 form-group"
    //             data-wow-duration="1s"
    //             data-wow-delay="0.8s"
    //         >
    //             <button type="submit" className="send-btn">
    //                 Submit
    //         </button>
    //         </div> */}
    //     </form>
  );
};

export default Contact;
