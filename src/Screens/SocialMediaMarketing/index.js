import React, { useEffect } from "react";
import { connect } from "react-redux";

const So = () => {
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
                src="images/social-media-banner.jpg"
                className="img-fluid hero-banner"
                alt=""
              />
            </div>
            <div className="col-lg-4">
              <div className="hero__wrap">
                <div className="overflow-hidden mb-3">
                  <h1 className="hero-h1">Social Media Marketing</h1>
                </div>
                <p className="hero-subline">
                  Build an online community of happy, <br /> loyal customers who
                  love what you do
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="content-body" id="our-story">
        <div className="custom-container-wrap pt-0 pb-0">
          <div className="row align-items-center ">
            <div className="col-12 col-lg-10 col-xl-8 m-auto text-center">
              <h4 className="heading-4">
                Get more social with our interactive marketing campaigns
              </h4>
              <p className="body-text-16 text-justify font-weight-normal mb-3">
                Social media isn’t for the faint hearted. What seems like a
                relatively easy job has become increasingly complex over the
                years, and keeping your content relevant, engaging and timely is
                a full-time job. If you’re struggling to keep on top and not
                getting the results you want, you need a flexible new approach
                that moves with the ever-changing landscape.
              </p>
              <p className="body-text-16 text-justify font-weight-normal mb-3">
                With social media services from Fire Up Design, we’ll make sure
                you’ve got every angle covered so you never have to worry about
                scheduling social media posts again. We create tailored,
                beautifully thought-out social media campaigns that cover
                everything from content strategy though to tagging, paid media,
                community management and much more.
              </p>
              <p className="body-text-16 text-justify font-weight-normal mb-3">
                Whatever the size or age of your business, not matter what
                industry you’re in, we’ll help you get the exposure you need.
                From your first ever social media channel to daily campaigns and
                analytics, we’re here to help you build wonderful relationships
                with customers far and wide.
              </p>
            </div>
            <div className="col-12 col-lg-10 col-xl-8 m-auto text-left">
              <h5 className="heading-5 text-center">
                Why you need Fire Up social media services{" "}
              </h5>
              <ul>
                <li className="mb-3">
                  As of 2021, there were 3.78 billion social media users
                  worldwide – that’s a whole lot of people out there who might
                  just love what you do!
                </li>
                <li className="mb-3">
                  Over 84% of social media users are aged 18-29, 81% are 30-49,
                  73% are aged 50 -64 and 45% are aged over 65, and it’s
                  essential to target your socials to the right demographic
                </li>
                <li className="mb-3">
                  The average person spends 2.5 hours a day on social media
                </li>
                <li className="mb-3">
                  Over 73% of marketers believe that social media plays an
                  important role in their business operations{" "}
                </li>
                <li className="mb-3">
                  54% of internet browsers use social media to make decisions
                  about which companies they want to connect with{" "}
                </li>
              </ul>
            </div>
            {/* <div class="col-12 col-lg-10 col-xl-8 m-auto pt-4">
                <h4>Our Process</h4>
                <p class="body-text-16 text-justify font-weight-light mb-4">Although we’re techies, we’re really interested in people too – which is the key to any successful social media campaign. Our social media services are consistently rated among the very best in the UK, and this is how we do it: </p>
            </div> */}
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
                          Although we’re techies, we’re really interested in
                          people too – which is the key to any successful social
                          media campaign. Our social media services are
                          consistently rated among the very best in the UK, and
                          this is how we do it:
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
                      It all starts with knowing your audience. We’ll work with
                      you to build a profile of your perfect customer and then
                      use our combination of technology, analytics and
                      understanding of consumer trends to find out more about
                      who they are and how they engage with companies on social
                      media.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 mb-4 mb-lg-5 d-flex">
                <div className="media project-steps">
                  <div className="media-left align-self-start mr-4">02</div>
                  <div className="media-body">
                    <h5 className="mt-0">
                      <span className="d-lg-block">Setting</span>Targets
                    </h5>
                    <p className="body-text-16 font-weight-normal">
                      It’s all well and good creating blog posts and social
                      media pages, but if you don’t have clear, measurable
                      targets your efforts are likely to fizzle out after a
                      couple of weeks. We’ll keep you on track with smart
                      objectives that are flexible and easy to achieve.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 mb-4 mb-lg-5 d-flex">
                <div className="media project-steps">
                  <div className="media-left align-self-start mr-4">03</div>
                  <div className="media-body">
                    <h5 className="mt-0">
                      <span className="d-lg-block">Executing the</span>Plan{" "}
                    </h5>
                    <p className="body-text-16 font-weight-normal">
                      It’s been said many times that a goal without a plan is
                      just a wish, and that’s particularly true when it comes to
                      social media. We’ll deliver a targeted strategy that’s
                      achievable and measurable every step of the way.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 mb-4 mb-lg-5 d-flex">
                <div className="media project-steps">
                  <div className="media-left align-self-start mr-4">04</div>
                  <div className="media-body">
                    <h5 className="mt-0">
                      <span className="d-lg-block">Monitoring</span>Progress
                    </h5>
                    <p className="body-text-16 font-weight-normal">
                      The social media landscape is always changing, so we’ll
                      keep a close eye on trends to ensure you’re always at the
                      top of the game. We’ll also provide you with daily reports
                      and make tweaks where necessary, presenting you with clear
                      data that shows you how your campaigns are progressing.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="row">
                <div class="col-12 text-center pb-5">
                    <h3 class="heading-3">Do you need a different approach to social media marketing?</h3>
                    <h3 class="heading-3">Let’s see where the conversation takes us!</h3>
                </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* <section id="our-chapter" class="content-body pb-extra pt-5">
    <div class="custom-container-wrap">
        <div class="row align-items-center fade-in">
            <div class="col-lg-6 mb-3 mb-lg-0 ">
                <h4 class="heading-4">Search Engine Optimisation</h4>
                <div class="tags-parent">
                    <span class="tag">Branding</span>
                    <span class="tag">Paid Media</span>
                    <span class="tag">Social Media</span>
                    <span class="tag">Website</span>
                </div>
                <p class="fw-body-text">Our approach to Search Engine Optimisation is not only to drive visitors to your website, but to help you convert those visitors into long term customers who want to spend their money with you. To us, SEO is about much more than just “traffic”. It’s about seeing visitors as people, not numbers, and taking the time to understand what will attract them to your website and encourage them to stick around.</p>
                <a href="search-engine-optimisation.php" class="orange-link mt-3">Learn More <i class="fas fa-chevron-right ml-2"></i></a>
            </div>
            <div class="col-lg-6 mb-3 mb-lg-0 switch-order">
                <div class="position-relative bg-frame bg-frame">
                    <img src="images/chapter-3.png" class="img-fluid w-100 h-100 " alt="">
                    <p class="picture-tag">Adventure</p>
                    <img src="images/frame-wood.png" class="frame" alt="">
                </div>
            </div>
        </div>
        <div class="row fade-in pt-3 pt-lg-5 mt-0 mt-lg-2">
            <div class="col-12">
                <h3 class="heading-3 text-center theme-color mb-4">Digital marketing solutions</h3>
            </div>
            <div class="col-12 col-lg-4 d-flex mb-4 mb-lg-0">
                <div class="techno-info-box text-center py-5 px-3">
                    <h6>Industry leading expert staff</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                </div>
            </div>
            <div class="col-12 col-lg-4 d-flex mb-4 mb-lg-0">
                <div class="techno-info-box text-center py-5 px-3">
                    <h6>Customer focused organization</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                </div>
            </div>
            <div class="col-12 col-lg-4 d-flex">
                <div class="techno-info-box text-center py-5 px-3">
                    <h6>Award winning work</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
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
                <h4>
                  Do you need a different approach to social media marketing?
                </h4>
                <h3 className="mt-2 mb-0">
                  Let’s see where the conversation takes us!
                </h3>
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
