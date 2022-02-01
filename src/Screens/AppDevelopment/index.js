import React, { useEffect } from "react";
import { connect } from "react-redux";

const MobileAppDevelopment = () => {
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
                src="images/mobile-app-banner.jpg"
                className="img-fluid hero-banner"
                alt=""
              />
            </div>
            <div className="col-lg-4">
              <div className="hero__wrap">
                <div className="overflow-hidden mb-3">
                  <h1 className="hero-h1">Mobile App Development</h1>
                </div>
                <p className="hero-subline">From Your Mind to Their Mobile</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="content-body" id="our-story">
        <div className="custom-container-wrap pt-0 pb-1">
          <div className="row align-items-center ">
            <div className="col-12 col-lg-10 col-xl-8 m-auto text-center">
              <h3 className="heading-3 mb-4">
                Give your business a competitive edge with our mobile app
                development services
              </h3>
              <p className="body-text-16 text-justify font-weight-normal mb-3">
                These days, there’s an app for pretty much everything. Which
                means if your business doesn’t have one yet, you’re in danger of
                getting left behind. A customisable app is not only a great way
                to streamline your business operations, but it can also help you
                make the most of those all-important relationships with
                customers and other stakeholders.{" "}
              </p>
              <p className="body-text-16 text-justify font-weight-normal mb-3">
                At Fire Up Design, we create engaging, really useful apps that
                the people who matter most to your business will love. Our team
                of expert UX/UI designers, architects and developers will work
                with you to help you unlock the power that mobile apps can
                deliver. We’ll keep your business strategy and customer needs at
                the heart of everything we do, leaving you with an end product
                that makes great business sense.
              </p>
              <p className="body-text-16 text-justify font-weight-normal mb-3">
                Our happy tribe of customers say we offer the best mobile app
                development services in the business, so if you’re looking for
                an interactive, easy to use app that’s great value for money and
                keeps your people what they want, talk to us.
              </p>
            </div>
            <div className="col-12 col-lg-10 col-xl-8 m-auto text-left">
              <h5 className="heading-5 text-center">
                Here’s why your business needs our custom mobile app development
                services:
              </h5>
              <ul>
                <li className="mb-3">
                  Over 85% of online shoppers say they prefer to buy from an app
                  than a website
                </li>
                <li className="mb-3">
                  In June 2021 there were more than 1.96 million apps on Apple
                  Store and 2.87 million on Google Play… which means lots of
                  your competitors are already out there
                </li>
                <li className="mb-3">
                  Research shows that every pound spent on creating user
                  experiences delivers a 100% ROI
                </li>
                <li className="mb-3">
                  The average time spent on Android and iOS apps is 6.7 minutes
                  and 5.6 minutes respectively, compared to 2-3 minutes on a
                  website. That gives you much longer to create a bond with your
                  customers
                </li>
                <li className="mb-3">
                  App based start-ups perform 825 times better than those
                  without an app
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="content-body pt-5" id="projects-step">
        <div className="container-fluid px-0">
          <div className="row no-gutters mb-2">
            <div className="col-12 position-relative d-block d-md-flex align-items-center">
              <img
                src="images/mobilestep-banner.jpg"
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
                          At Fire Up Design, we don’t just create apps for the
                          sake of it. We develop really handy tools that look
                          great and make a real difference to you and your
                          customers. We ask all the right questions to help you
                          develop your vision for your business, and bring that
                          vision to life in the palm of your hand. Here’s how we
                          do it:
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="row no-gutters">
        <div class="col-12">
            <img src="images/mobilestep-banner.jpg" class="w-100" alt="">
        </div>
    </div> */}
          <div className="project-steps-wrap custom-container-wrap pb-0 pb-lg-0">
            <div className="row">
              <div className="col-12 col-lg-6 mb-4 mb-lg-5 d-flex">
                <div className="media project-steps">
                  <div className="media-left align-self-start mr-4">01</div>
                  <div className="media-body">
                    <h5 className="mt-0">
                      <span className="d-lg-block">Discover</span>Information
                      Gathering
                    </h5>
                    <p className="body-text-16 font-weight-normal">
                      This is in many ways the most important stage of the
                      process, because it’s when we really get to find out what
                      your business does and how you can best serve your
                      customers. We’ll look at what features you want, which
                      platforms suit you best, and dig deep into the market to
                      check out what your competitors are offering – so you can
                      go one step further!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 mb-4 mb-lg-5 d-flex">
                <div className="media project-steps">
                  <div className="media-left align-self-start mr-4">02</div>
                  <div className="media-body">
                    <h5 className="mt-0">
                      <span className="d-lg-block">Define</span>UX and
                      Interactive Prototype
                    </h5>
                    <p className="body-text-16 font-weight-normal">
                      This is when we get into all the nitty gritty of creating
                      an app that does everything you want it to (and more).
                      It’s all about creating an interactive, fun user
                      experience with no glitches, so we’ll be doing lots of
                      testing at this stage.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 mb-4 mb-lg-5 d-flex">
                <div className="media project-steps">
                  <div className="media-left align-self-start mr-4">03</div>
                  <div className="media-body">
                    <h5 className="mt-0">
                      <span className="d-lg-block">Design and Development</span>
                      Implementation
                    </h5>
                    <p className="body-text-16 font-weight-normal">
                      At this stage we add all the bells and whistles that make
                      your app look and feel amazing to everyone who uses it.
                      We’ll be doing more testing and getting real users to try
                      it out and give us their feedback.
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
                      After a few more tests your app will be ready to download
                      in Google Play and/or the Apple Store.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="our-chapter" className="content-body pb-extra pt-0">
        <div className="custom-container-wrap">
          {/* <div class="row align-items-center fade-in">
        <div class="col-lg-6 mb-3 mb-lg-0 switch-order">
            <div class="position-relative bg-frame bg-frame">
                <img src="images/chapter-4.png" class="img-fluid w-100 h-100 " alt="">
                <p class="picture-tag">Discover</p>
                <img src="images/frame-wood.png" class="frame" alt="">
            </div>
        </div>
        <div class="col-lg-6 mb-3 mb-lg-0 ">
            <h4 class="heading-4">Mobile app development</h4>
            <div class="tags-parent">
                <span class="tag">Branding</span>
                <span class="tag">Paid Media</span>
                <span class="tag">Social Media</span>
                <span class="tag">Website</span>
            </div>
            <p class="fw-body-text">Pictures say a thousand words. Lucky for you we know how to effectively use both words and images. Let’s face it, no one likes boring design. First impressions are 94% design related, which means your business’s website needs to stand out! Simple, clean, easy to navigate and pleasing on the eye – that’s the winning combination. Not only do we focus on design to create visually appealing websites.</p>
            <a href="javascript:void(0)" class="orange-link mt-3">Start Project <i class="fas fa-chevron-right ml-2"></i></a>
        </div>
    </div> */}
          {/* <div class="row align-items-center fade-in">
        <div class="col-12 col-xl-10 m-auto techno-logo">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0 text-center">
                    <img src="images/tec-logo-1.png" alt="" class="img-fluid">
                    <h6 class="mt-4">Top app developer
                        genuine quality</h6>
                </div>
                <div class="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0 text-center">
                    <img src="images/tec-logo-2.png" alt="" class="img-fluid">
                    <h6 class="mt-4">Top app developer
                        genuine quality</h6>
                </div>
                <div class="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0 text-center">
                    <img src="images/tec-logo-3.png" alt="" class="img-fluid">
                    <h6 class="mt-4">Top app developer
                        genuine quality</h6>
                </div>
                <div class="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0 text-center">
                    <img src="images/tec-logo-4.png" alt="" class="img-fluid">
                    <h6 class="mt-4">Top app developer
                        genuine quality</h6>
                </div>
            </div>
        </div>
    </div> */}
          <div className="row">
            <div className="col-12 col-lg-10 col-xl-8 m-auto py-4">
              {/* <h5 class="heading-5 text-center">Mobile App Development Services That Bring Ideas to Life</h5> */}
              {/* <h4>Our Process</h4>
            <p class="body-text-16 text-justify font-weight-light mb-4">At Fire Up Design, we don’t just create apps for the sake of it. We develop really handy tools that look great and make a real difference to you and your customers. We ask all the right questions to help you develop your vision for your business, and bring that vision to life in the palm of your hand. Here’s how we do it:</p> */}
              <h5 className="heading-5 text-center">
                Your Customers Deserve Something Amazing – Let’s Give Them
                Exactly That
              </h5>
              <p className="body-text-16 text-justify font-weight-normal mb-4 text-center">
                Get in touch to discover more about how our mobile app
                development services can bring your business vision to life
              </p>
            </div>
          </div>
          <div className="row fade-in">
            {/* <div class="col-12">
            <h3 class="heading-3 text-center theme-color mb-4">We build modern creative mobile experiences</h3>
        </div> */}
            <div className="col-12 col-lg-4 d-flex mb-4 mb-lg-0">
              <div className="techno-info-box flex-grow-1 text-center">
                <img src="images/android.png" alt="" className="img-fluid" />
                <h5>Android development</h5>
              </div>
            </div>
            <div className="col-12 col-lg-4 d-flex mb-4 mb-lg-0">
              <div className="techno-info-box flex-grow-1  text-center">
                <img src="images/apple.png" alt="" className="img-fluid" />
                <h5>iOS development</h5>
              </div>
            </div>
            <div className="col-12 col-lg-4 d-flex">
              <div className="techno-info-box flex-grow-1 text-center">
                <img src="images/cube.png" alt="" className="img-fluid" />
                <h5>Hybrid app development</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="start-projects" className="content-body py-5">
        <div className="custom-container-wrap">
          <div className="project-steps-wrap mt-0">
            <div className="row">
              <div className="col-12 col-lg-9 text-lg-left text-center">
                <h4>
                  Mobile App Development Services That Bring Ideas to Life
                </h4>
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

export default MobileAppDevelopment;
