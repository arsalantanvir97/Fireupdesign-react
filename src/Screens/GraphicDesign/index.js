import React, { useEffect } from "react";
import { connect } from "react-redux";

const WebDeisgn = () => {
  useEffect(() => {
    let fadein = document.getElementsByClassName("fade-in");
    let riseUp = document.querySelectorAll(".rise-up");

    window?.gsap.to(".hero-h1", {
      scrollTrigger: ".hero__wrap", // start the animation when ".box" enters the viewport (once)
      y: 0,
      delay: 1,
      duration: 1.5,
      stagger: 1,
    });
    window?.gsap.to(".hero-subline", {
      opacity: 1,
      delay: 2.5,
      duration: 1.5,
    });
    window?.gsap.from(".hero-link", {
      opacity: 0,
      delay: 3,
      duration: 1.5,
    });
    window?.gsap.from(".hero-banner", {
      opacity: 0,
      delay: 0.5,
      duration: 1,
    });
  }, [window?.gsap]);

  return (
    <div>
      <section className="hero">
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <div className="col-lg-8">
              <img
                src="images/graphic-banner.jpg"
                className="img-fluid hero-banner"
                alt=""
              />
            </div>
            <div className="col-lg-4">
              <div className="hero__wrap">
                <div className="overflow-hidden mb-3">
                  <h1 className="hero-h1">Graphic Design Services</h1>
                </div>
                <p className="hero-subline">Connecting People Through Design</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="content-body" id="our-story">
        <div className="custom-container-wrap pt-0 pb-0">
          <div className="row align-items-center ">
            <div className="col-12 col-lg-10 col-xl-8 m-auto text-center">
              <h3 className="heading-3">Our Creativity is Limitless.</h3>
              <p className="body-text-16 text-justify font-weight-normal mb-4">
                We don’t just do design. Our creative graphic design services
                are all about visual experiences that evoke emotions, push
                boundaries and exceed expectations.
              </p>
              <p className="body-text-16 text-justify font-weight-normal mb-4">
                Everyone knows it’s important to stand out from the crowd, but
                doing it is easier said than done when that crowd is getting
                busier and noisier every day. Luckily, the solution is right
                here at our fingertips.
              </p>
              <p className="body-text-16 text-justify font-weight-normal mb-4">
                We’re don’t offer your average graphic design business services.
                We know that great design requires understanding what makes a
                great user experience. It’s about using pictures, colours and
                fonts that speak to your audience and tell them what you’re
                about without having to shout about it. It’s about building
                trust, recognition and forging beautiful relationships that go
                on to stand the test of time. And it’s about clear, simple
                messaging that gets you where you want to be.
              </p>
              <p className="body-text-16 text-justify font-weight-normal mb-4">
                We love what we do, and it shows. Every different job is an
                exciting new challenge for us, which is why you’ll never catch
                us churning out different variations of the same old images and
                ideas. We concentrate on the uniqueness of each and every client
                to create strong visual brands that people love. So, if you’re
                tired of the same old, same old, let us show you something new.
              </p>
            </div>
            <div className="col-12 col-lg-10 col-xl-8 m-auto text-left">
              <h5 className="heading-5 text-center">
                Here’s why you need Graphic Design Services from Fire Up Design
              </h5>
              <ul>
                <li className="mb-3">
                  Research shows that 76% of shoppers go with brands they
                  recognise. Everyone’s got to start somewhere though, right?
                  With our powerful graphic design skills, we’ll help you create
                  a brand identity that builds trust in no time.
                </li>
                <li className="mb-3">
                  Buyers like to know they’re more than just a number. We take
                  the time to understand who your customers are and what makes
                  them tick, helping you communicate visual messages that really
                  speak to them.
                </li>
                <li className="mb-3">
                  The human brain processes images 60,000 times faster than it
                  processes text, so your branding can make or break your
                  potential relationships with customers. We really understand
                  how to create strong images that make an instant impact for
                  all the right reasons.
                </li>
                <li className="mb-3">
                  Over 85% of people say colour plays an important role in their
                  buying decisions. We understand the psychology behind every
                  shade and hue, so you’ll always be one step ahead.
                </li>
              </ul>
            </div>
            {/*
            <div class="col-12 col-lg-10 col-xl-8 m-auto pt-4">
                <h5 class="heading-5 text-center">Our Graphic Design Business Services Put Your First</h5> 
                <h4>Our Process</h4>
                <p class="body-text-16 text-justify font-weight-normal mb-4">Our design process is all focused around two important elements: you and your customers. We’ll work with you to understand your core messages, and we won’t stop until we’ve created something you can be really proud of. Here’s how we do it: </p>
            </div>
            */}
          </div>
        </div>
      </section>
      <section className="content-body pt-5" id="projects-step">
        <div className="container-fluid px-0">
          <div className="row no-gutters">
            <div className="col-12 position-relative d-block d-md-flex align-items-center">
              <img
                src="images/graphicstep-banner.jpg"
                className="w-100"
                alt=""
              />
              <div className="custom-container-wrap position-absolute project-steps-intro">
                <div className="row">
                  <div className="col-lg-7 mx-auto">
                    <div className="media project-steps">
                      <div className="media-body">
                        <h5 className="mt-0 text-red font-weight-normal">
                          <span className="d-lg-block">Our Process</span>
                        </h5>
                        <p className="body-text-16 font-weight-normal">
                          Our design process is all focused around two important
                          elements: you and your customers. We’ll work with you
                          to understand your core messages, and we won’t stop
                          until we’ve created something you can be really proud
                          of. Here’s how we do it:
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="project-steps-wrap custom-container-wrap pb-5 pb-lg-0">
            {/* <div class="row">
                <div class="col-lg-10 mx-auto mb-4 mb-lg-5">
                    <div class="media project-steps">
                        <div class="media-body">
                            <h5 class="mt-0 text-red font-weight-normal"><span class="d-lg-block">Our Process</span></h5>
                            <p class="body-text-16 font-weight-normal">Our design process is all focused around two important elements: you and your customers. We’ll work with you to understand your core messages, and we won’t stop until we’ve created something you can be really proud of. Here’s how we do it:</p>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="row">
              <div className="col-12 col-lg-6 mb-4 mb-lg-5 d-flex">
                <div className="media project-steps">
                  <div className="media-left align-self-start mr-4">01</div>
                  <div className="media-body">
                    <h5 className="mt-0">
                      <span className="d-lg-block">Discover</span>Information
                      gathering
                    </h5>
                    <p className="body-text-16 font-weight-normal">
                      The first stage of the process is about gathering as much
                      data as we can about who you are, what you do and what
                      your customers want to see.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 mb-4 mb-lg-5 d-flex">
                <div className="media project-steps">
                  <div className="media-left align-self-start mr-4">02</div>
                  <div className="media-body">
                    <h5 className="mt-0">
                      <span className="d-lg-block">Define</span>Strategic brand
                      definition
                    </h5>
                    <p className="body-text-16 font-weight-normal">
                      During this phase we’ll dig a bit deeper into how you want
                      to be seen by the world and the colours, fonts and images
                      that really speak to you (and the people who buy from
                      you).
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 mb-4 mb-lg-5 d-flex">
                <div className="media project-steps">
                  <div className="media-left align-self-start mr-4">03</div>
                  <div className="media-body">
                    <h5 className="mt-0">
                      <span className="d-lg-block">Design</span>Creative
                      implementation
                    </h5>
                    <p className="body-text-16 font-weight-normal">
                      When we’ve gathered all the relevant data, we’ll take it
                      away and start getting creative. We’ll keep you in the
                      loop throughout every stage of the process so you’re 100%
                      happy.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 mb-4 mb-lg-5 d-flex">
                <div className="media project-steps">
                  <div className="media-left align-self-start mr-4">04</div>
                  <div className="media-body">
                    <h5 className="mt-0">
                      <span className="d-lg-block">Delight</span>Roll out
                    </h5>
                    <p className="body-text-16 font-weight-normal">
                      You’re good to go! Your new graphics will be available in
                      print and digital form to use on all your online and paper
                      branding materials.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section id="our-chapter" class="content-body pb-extra pt-0">
    <div class="custom-container-wrap">
        <div class="row align-items-center fade-in">
            <div class="col-lg-6 mb-3 mb-lg-0 ">
                <h4 class="heading-4">Graphic design services</h4>
                <div class="tags-parent">
                    <span class="tag">Branding</span>
                    <span class="tag">Paid Media</span>
                    <span class="tag">Social Media</span>
                    <span class="tag">Website</span>
                </div>
                <p class="fw-body-text">Pictures say a thousand words. Lucky for you we know how to effectively use both words and images. Let’s face it, no one likes boring design. First impressions are 94% design related, which means your business’s website needs to stand out! Simple, clean, easy to navigate and pleasing on the eye – that’s the winning combination. Not only do we focus on design to create visually appealing websites.</p>
                <a href="javascript:void(0)" class="orange-link mt-3">Start Project <i class="fas fa-chevron-right ml-2"></i></a>
            </div>
            <div class="col-lg-6 mb-3 mb-lg-0 switch-order">
                <div class="position-relative bg-frame bg-frame">
                    <img src="images/chapter-2.png" class="img-fluid w-100 h-100 " alt="">
                    <p class="picture-tag">Imagine</p>
                    <img src="images/frame-wood.png" class="frame" alt="">
                </div>
            </div>
        </div>
    </div>
</section> */}
      <section id="start-projects" className="content-body py-5">
        <div className="custom-container-wrap">
          <div className="project-steps-wrap mt-0">
            <div className="row">
              <div className="col-12 col-lg-9 text-lg-left text-center">
                <h2>Our Graphic Design Business Services Put You First</h2>
                <h3 className="mt-2 mb-0">Contact us today.</h3>
              </div>
              <div className="col-12 col-lg-3 align-self-center text-lg-right text-center mt-5 mt-lg-0">
                <a href="javascript:void(0)" className="btn-link mt-3">
                  Start Project <i className="fas fa-chevron-right ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="lets-connect" className="content-body pb-extra">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-11 col-xl-10  mx-auto col-custom">
              <div className="row fade-in">
                <div className="col-12 text-center mb-5">
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
    </div>
  );
};

export default WebDeisgn;
