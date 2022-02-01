import React,{useEffect} from "react";

const SearchEngineOptmization = () => {
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
      <div>
        <section className="hero">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div className="col-lg-8">
                <img
                  src="images/seo-banner.jpg"
                  className="img-fluid hero-banner"
                  alt=""
                />
              </div>
              <div className="col-lg-4">
                <div className="hero__wrap">
                  <div className="overflow-hidden mb-3">
                    <h1 className="hero-h1">
                      Search Engine Optimisation Services
                    </h1>
                  </div>
                  <p className="hero-subline">
                    SEO Optimisation Services with a Human Touch
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content-body" id="our-story">
          <div className="custom-container-wrap pt-0 pb-5">
            <div className="row align-items-center ">
              <div className="col-12 col-lg-10 col-xl-8 m-auto text-center">
                <h3 className="heading-3">
                  Organic SEO Services with Tangible Results
                </h3>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  Our approach to Search Engine Optimisation is not only to
                  drive visitors to your website, but to help you convert those
                  visitors into long term customers who want to spend their
                  money with you. To us, SEO is about much more than just
                  “traffic”. It’s about seeing visitors as people, not numbers,
                  and taking the time to understand what will attract them to
                  your website and encourage them to stick around.{" "}
                </p>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  We strongly believe that there’s no “one size fits all”
                  approach to SEO. So, we use our winning combination of
                  extensive industry knowledge, problem solving tech skills and
                  good old fashioned customer focus to create the best possible
                  experience for you and your customers. Our highly analytical
                  approach enables us to dig deep into what people really want,
                  resulting in winning campaigns are driven by hard data and
                  give you great value for money.
                </p>
              </div>
              <div className="col-12 col-lg-10 col-xl-8 m-auto text-left">
                <h5 className="heading-5 text-center">
                  Why you need our SEO Optimisation Services{" "}
                </h5>
                <ul>
                  <li className="mb-3">
                    Google owns a whopping 92% of the search market, and our
                    Google ranking services will get you where you need to be.
                    We know all the other search engines like YouTube, Yahoo,
                    Bing, Yandex, Baidu and DuckDuckGo inside out too, so you’ll
                    have the best possible chance of getting noticed first
                  </li>
                  <li className="mb-3">
                    Getting found online is about much more than using the right
                    keywords. It’s about creating beautifully designed websites
                    and social media pages that comply with a strict set of
                    rules and policies – and we know ‘em all!
                  </li>
                  <li className="mb-3">
                    Good SEO is all about creating positive user experiences,
                    which should be every online marketer’s number one priority.
                    Our campaigns are carefully thought through, immaculately
                    written and beautifully designed, so you can build lasting
                    relationships
                  </li>
                  <li className="mb-3">
                    SEO impacts the buying cycle, giving you a brand-new way to
                    communicate your company’s aims, services and special offers
                    to a wider audience
                  </li>
                </ul>
              </div>
              {/*
            <div class="col-12 col-lg-10 col-xl-8 m-auto pt-4">
                 <h5 class="heading-5 text-center">SEO Optimisation Services with a Human Touch</h5> 
                <h4>Our Process</h4>
                <p class="body-text-16 text-justify font-weight-light mb-4">Our Organic SEO Services are focused on giving you a great return on your investment, by converting visitors to your site into paying customers. It’s a complex process that takes time, knowledge and dedication, but when the formula’s right it’s a win-win situation for everyone! Here’s how we do it: </p>
            </div>
*/}
            </div>
          </div>
        </section>
        <section className="content-body pt-0 pt-lg-5" id="projects-step">
          <div className="container-fluid px-0">
            <div className="row no-gutters mb-2">
              <div className="col-12 position-relative d-block d-md-flex align-items-center">
                <img
                  src="images/socialstep-banner.jpg"
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
                            Our Organic SEO Services are focused on giving you a
                            great return on your investment, by converting
                            visitors to your site into paying customers. It’s a
                            complex process that takes time, knowledge and
                            dedication, but when the formula’s right it’s a
                            win-win situation for everyone! Here’s how we do it:
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
                <img src="images/socialstep-banner.jpg" class="w-100" alt="">
            </div>
        </div> */}
            <div className="project-steps-wrap custom-container-wrap pb-0 pb-sm-0">
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
                        This is an essential part of the SEO process that
                        involves understanding your business strategy, branding,
                        customer profiles, industry trends and competitors.
                        We’ll do an in-depth health check on your current
                        website and socials and ask important questions about
                        your key demographic and the questions and emotions that
                        drive them to visit sites like yours.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 mb-4 mb-lg-5 d-flex">
                  <div className="media project-steps">
                    <div className="media-left align-self-start mr-4">02</div>
                    <div className="media-body">
                      <h5 className="mt-0">
                        <span className="d-lg-block">Define</span>Content and
                        Link Building
                      </h5>
                      <p className="body-text-16 font-weight-normal">
                        During this phase we’ll look deeper into your existing
                        content and check its current performance, before coming
                        up with a winning strategy that’s perfectly tailored to
                        your unique business needs. We’ll use the hard data we
                        collect to create campaigns that are targeted to your
                        audience and build great online visibility.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 mb-4 mb-lg-5 d-flex">
                  <div className="media project-steps">
                    <div className="media-left align-self-start mr-4">03</div>
                    <div className="media-body">
                      <h5 className="mt-0">
                        <span className="d-lg-block">Development and</span>
                        Implementation
                      </h5>
                      <p className="body-text-16 font-weight-normal">
                        We’ll use tried and tested tools like Google Tag Manager
                        to track and monitor visitors to your site and
                        understand their behaviour. Our aim here is to capture
                        potential customers at the right stage, help them
                        navigate your site in the most user-friendly way and get
                        them to that all-important “buy now” or “contact us”
                        button.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 mb-4 mb-lg-5 d-flex">
                  <div className="media project-steps">
                    <div className="media-left align-self-start mr-4">04</div>
                    <div className="media-body">
                      <h5 className="mt-0">
                        <span className="d-lg-block">Delight</span>Creating
                        Happy Customers
                      </h5>
                      <p className="body-text-16 font-weight-normal">
                        Converting traffic into sales is only the start of the
                        journey. We go way beyond traditional Google ranking
                        services with long term strategies and real time reports
                        based on what your customers want.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="row">
                <div class="col-12 text-center pb-4">
                    <h4 class="heading-">To find out more about how our SEO Optimisation Services can help your business, <a href="contact-us.php">contact us</a> today.</h4>
                </div>
            </div> */}
            </div>
          </div>
        </section>
        <section id="start-projects" className="content-body py-5">
          <div className="custom-container-wrap">
            <div className="project-steps-wrap mt-0">
              <div className="row">
                <div className="col-12 col-lg-9 text-lg-left text-center">
                  <h4>
                    To find out more about how our SEO Optimisation services can
                    help your business
                  </h4>
                  <h3 className="mt-2 mb-0">Contact us today</h3>
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
    </div>
  );
};

export default SearchEngineOptmization;
