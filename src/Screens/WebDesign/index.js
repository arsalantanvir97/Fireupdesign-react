import React,{useEffect} from "react";
import { connect } from "react-redux";

const WebDeisgn = () => {


  useEffect(() => {
    let fadein = document.getElementsByClassName('fade-in');
    let riseUp = document.querySelectorAll('.rise-up');

    window?.gsap.to(".hero-h1", {
        scrollTrigger: ".hero__wrap", // start the animation when ".box" enters the viewport (once)
        y: 0,
        delay: 1,
        duration: 1.5,
        stagger: 1
    });
    window?.gsap.to(".hero-subline", {
        opacity: 1,
        delay: 2.5,
        duration: 1.5
    });
    window?.gsap.from(".hero-link", {
        opacity: 0,
        delay: 3,
        duration: 1.5
    });
    window?.gsap.from(".hero-banner", {
        opacity: 0,
        delay: .5,
        duration: 1
    });
  }, [window?.gsap])


  return (
    <div>
        <section className="hero">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div className="col-lg-8">
                <img src="images/web-banner.jpg" className="img-fluid hero-banner" alt="" />
              </div>
              <div className="col-lg-4">
                <div className="hero__wrap">
                  <div className="overflow-hidden mb-3">
                    <h1 className="hero-h1">
                      Web Design &amp; Development
                    </h1>
                  </div>
                  <p className="hero-subline">Our web design and development services delight and amaze</p>
                  <div className="d-flex hero-link">
                    <a href="wordpress-development.php" className="orange-link mr-4" style={{opacity: 1}}>WordPress<i className="fas fa-chevron-right ml-2" /></a>
                    <a href="ecommerce-website-development.php" className="orange-link" style={{opacity: 1}}>eCommerce<i className="fas fa-chevron-right ml-2" /></a>
                  </div>
                  {/* <p class="hero-subline">Our Web design services will knock your socks off</p> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content-body" id="our-story">
          <div className="custom-container-wrap pt-0 pb-5">
            <div className="row align-items-center ">
              <div className="col-12 col-lg-10 col-xl-8 m-auto text-center">
                <h3 className="heading-3">Your Website, Your Story</h3>
                <p className="body-text-16 text-justify font-weight-normal mb-4">You already know you’re great at what you do. But how do you share that brilliance with the rest of the world, in an increasingly crowded and competitive environment? </p>
                <p className="body-text-16 text-justify font-weight-normal mb-3">The secret is to win their hearts and minds. </p>
                <p className="body-text-16 text-justify font-weight-normal mb-3">At Fire Up Design , we don’t just create websites. We tell stories, paint pictures and take visitors on journeys where brands come alive. We’re all about creating memorable experiences that turn into long term partnerships, because we know that no matter how far technology can take us, great business is all about people. So, if you’re looking for an affordable web design agency that really gets you, step this way….</p>
              </div>
              <div className="col-12 col-lg-10 col-xl-8 m-auto pt-4">
                <h5 className="heading-5 text-center">Hello, let’s create something beautiful</h5>
                <p className="body-text-16 text-justify font-weight-normal mb-3">You know you want a website, but here’s why you NEED FIRE-Up to create it for you:</p>
                <ul>
                  <li className="mb-3">The average person takes just 0.05 seconds to figure out whether they like what they see, so if your site isn’t pressing their buttons they’ll be gone in a puff of smoke. </li>
                  <li className="mb-3">75% of your potential customers will judge the credibility of your entire company on the quality of your website</li>
                  <li className="mb-3">57% of internet users won’t recommend a business with a poorly designed “mobile friendly” website</li>
                </ul>
                <p className="body-text-16 text-justify font-weight-normal mb-3">Our website design services are all about creating an inviting space where your customers (including the ones you haven’t met yet) will want to hang out and find out more about who you are and what you do. Our focus will always be on providing you with an amazing product that speaks to your audience, defines your brand and has a real wow factor.</p>
                <p className="body-text-16 text-justify font-weight-normal mb-3">We’re big on quality, but we also know that value for money is vital too. Sometimes, choosing an affordable web design agency means compromising on the end product, but that couldn’t be further from the truth with us. We strive for excellence in everything we do, so we’ll always deliver a great quality website at a cost you’ll be pleasantly surprised by.</p>
                <p className="body-text-16 text-justify font-weight-normal mb-3">Your business goals are always our number one priority, so you can trust to deliver a beautiful, user friendly website on time, within budget and with a smile. </p>
              </div>
            </div>
          </div>
        </section>
        <section className="content-body pt-0 pt-lg-5" id="projects-step">
          <div className="container-fluid p-0">
            <div className="row no-gutters mb-2">
              <div className="col-12 position-relative d-block d-md-flex align-items-center">
                <img src="images/webstep-banner.jpg" className="w-100" alt="" />
                <div className="custom-container-wrap position-absolute project-steps-intro">
                  <div className="row">
                    <div className="col-lg-7 mx-auto">
                      <div className="media project-steps">
                        <div className="media-body">
                          <h5 className="mt-0 text-red font-weight-normal"><span className="d-lg-block">Our Process</span></h5>
                          <p className="body-text-16 font-weight-normal">We know how important it is to get your website absolutely spot on, so we’ll work with you throughout the journey to make sure you’re happy with the way we’re heading. We use a tried and tested process that keeps you and your business goals at the heart of our work.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="row no-gutters">
            <div class="col-12">
                <img src="images/webstep-banner.jpg" class="w-100" alt="">
            </div>
        </div> */}
            {/* <div class="row no-gutters">
            <div class="custom-container-wrap py-5">
                <div class="col-12 col-lg-10 col-xl-8 m-auto text-left">
                <h5 class="heading-5 text-center">You know you want a website, but here’s why you NEED FIRE-Up to create it for you:</h5>
                    <ul>
                        <li class="mb-3">The average person takes just 0.05 seconds to figure out whether they like what they see, so if your site isn’t pressing their buttons they’ll be gone in a puff of smoke.</li>
                        <li class="mb-3">75% of your potential customers will judge the credibility of your entire company on the quality of your website</li>
                        <li class="mb-3">57% of internet users won’t recommend a business with a poorly designed “mobile friendly” website</li>
                    </ul>
                    <p>Our website design services are all about creating an inviting space where your customers (including the ones you haven’t met yet) will want to hang out and find out more about who you are and what you do. Our focus will always be on providing you with an amazing product that speaks to your audience, defines your brand and has a real wow factor.</p>
                    <p>We’re big on quality, but we also know that value for money is vital too. Sometimes, choosing an affordable web design agency means compromising on the end product, but that couldn’t be further from the truth with us. We strive for excellence in everything we do, so we’ll always deliver you with a great quality website at a cost you’ll be pleasantly surprised by.</p>
                    <p>Your business goals are always our number one priority, so you can trust to deliver a beautiful, user friendly website on time, within budget and with a smile. </p>
                </div>
            </div>
        </div> */}
            <div className="project-steps-wrap custom-container-wrap pb-0 pb-sm-0">
              <div className="row">
                <div className="col-12 col-lg-6 mb-4 mb-lg-5 d-flex">
                  <div className="media project-steps">
                    <div className="media-left align-self-start mr-4">01</div>
                    <div className="media-body">
                      <h5 className="mt-0"><span className="d-lg-block">Discover</span>Information gathering</h5>
                      <p className="body-text-16 font-weight-normal">This stage is all about gathering information, so we’ll gain a clear understanding of what you do, your key messages and the kind of customers you want to attract. We’ll also undertake intensive research into your industry, including user research and competitor analysis.</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 mb-4 mb-lg-5 d-flex">
                  <div className="media project-steps">
                    <div className="media-left align-self-start mr-4">02</div>
                    <div className="media-body">
                      <h5 className="mt-0"><span className="d-lg-block">Define</span>Strategy brand definition</h5>
                      <p className="body-text-16 font-weight-normal">This is where we start to dig a bit deeper into the things that define your brand, like the colours, styles and fonts that really speak to you and represent your personality.</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 mb-4 mb-lg-5 d-flex">
                  <div className="media project-steps">
                    <div className="media-left align-self-start mr-4">03</div>
                    <div className="media-body">
                      <h5 className="mt-0"><span className="d-lg-block">Design</span>Creative implementation</h5>
                      <p className="body-text-16 font-weight-normal">When we’ve got all the information we need, we’ll get to work on developing a prototype. This is where we get busy with developing user-friendly interfaces, wireframes and conducting tests to make sure everything’s working as it should.</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 mb-4 mb-lg-5 d-flex">
                  <div className="media project-steps">
                    <div className="media-left align-self-start mr-4">04</div>
                    <div className="media-body">
                      <h5 className="mt-0"><span className="d-lg-block">Delight</span>Roll out and refine</h5>
                      <p className="body-text-16 font-weight-normal">Now the magic really starts to happen. During this stage we’ll do our final tweaks, refine the details and roll out the design so it’s ready to go. All you need to do now is get ready for those calls and emails to start coming in.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="row">
                <div class="col-12 py-3 text-center">
                    <h4 class="heading-4">
                        For affordable, quality web design services you’ll love, contact us today.
                    </h4>
                </div>
            </div> */}
            </div>
          </div>
        </section>
        {/* 
<section id="our-chapter" class="content-body pb-extra pt-5">
    <div class="custom-container-wrap">
        <div class="row align-items-center fade-in">
            <div class="col-lg-6 mb-3 mb-lg-0 switch-order">
                <div class="position-relative bg-frame bg-frame">
                    <img src="images/chapter-1.png" class="img-fluid w-100 h-100 " alt="">
                    <p class="picture-tag">Create</p>
                    <img src="images/frame-wood.png" class="frame" alt="">
                </div>
            </div>
            <div class="col-lg-6 mb-3 mb-lg-0 ">
                <h4 class="heading-4">Web design &amp; development</h4>
                <div class="tags-parent">
                    <span class="tag">Branding</span>
                    <span class="tag">Paid Media</span>
                    <span class="tag">Social Media</span>
                    <span class="tag">Website</span>
                </div>
                <p class="fw-body-text">We build, create and maintain user-friendly websites with the wow factor. You want a website, but this is why your business NEEDS a FIRED-UP website:</p>
                <ul class="commitments mt-3">
                    <li>You have 0.05 seconds to make a good impression and keep a potential customer interested.</li>
                    <li>Your company's credibility is judged based on your web design by 75% of your potential customer base.</li>
                    <li>A business with a poorly designed "mobile-friendly" website won't get recommended by 57% of internet users.</li>
                </ul>
                <p class="fw-body-text">We build, create and maintain user-friendly websites with the wow factor. You want a website, but this is why your business NEEDS a FIRED-UP website:</p>
                <a href="javascript:void(0)" class="orange-link mt-3">Start Project <i class="fas fa-chevron-right ml-2"></i></a>

            </div>
        </div>
    </div>
</section> */}
        <section id="start-projects" className="content-body py-5">
          <div className="custom-container-wrap">
            <div className="project-steps-wrap mt-0">
              <div className="row">
                <div className="col-12 col-lg-9 text-lg-left text-center">
                  <h2>For affordability, quality web design services you’ll love</h2>
                  <h3 className="mt-2 mb-0">Contact us today</h3>
                </div>
                <div className="col-12 col-lg-3 align-self-center text-lg-right text-center mt-5 mt-lg-0">
                  <a href="javascript:void(0)" className="btn-link mt-3">Start Project <i className="fas fa-chevron-right ml-2" /></a>
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
                    <p className="body-text-18">Get in touch and lets get those creative juices flowing</p>
                  </div>
                  <div className="col-lg-8 mb-4 mb-lg-0">
                    <form action="#" className="contact_form">
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <input type="text" className="fireup-input" placeholder="Full Name" />
                        </div>
                        <div className="col-md-6 mb-4">
                          <input type="email" className="fireup-input" placeholder="Email Address" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <input type="number" className="fireup-input" placeholder="Phone Number" />
                        </div>
                        <div className="col-md-6 mb-4">
                          <input type="text" className="fireup-input" placeholder="Select Service" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 mb-4">
                          <textarea name id className="fireup-textarea" placeholder="Description Of Project" cols={30} rows={6} defaultValue={""} />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 text-center">
                          <button type="submit" className="form-submit">Submit Request <i className="fas fa-chevron-right ml-2" /></button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-4">
                    <ul className="connect">
                      <li>
                        <a href="mailto:Hello@fireupdesign.com">hello@fireupdesign.com</a>
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
                            <a href="https://twitter.com/fireupdesign?s=08" target="_blank"><i className="fab fa-twitter" /></a>
                          </li>
                          <li>
                            <a href="https://www.facebook.com/fireupdesign/" target="_blank"><i className="fab fa-facebook-f" /></a>
                          </li>
                          <li>
                            <a href="https://instagram.com/fireupdesign?igshid=198v0grqib17l" target="_blank"><i className="fab fa-instagram" /></a>
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
