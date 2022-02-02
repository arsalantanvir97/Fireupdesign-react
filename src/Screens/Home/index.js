import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { fetchPosts } from "../../Api/Posts";
import PortfolioItem from "./PortfolioItem";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ViewLoader from "../../Components/ViewLoader";
import Contact from "../../Components/Contact/Contact";

const Home = () => {
  const { data, error, isError, isLoading } = useQuery("posts", fetchPosts);
  const [Count, setCount] = useState(0);

  console.log(data);

  // useEffect(() => {

  //   window.$(".collection-carousel").owlCarousel({
  //     loop: true,
  //     items: 4,
  //     margin: 10,
  //     nav: true,
  //     arrows: true,
  //     dots: false,
  //     navText: [
  //       "<i class='fa fa-chevron-left'></i>",
  //       "<i class='fa fa-chevron-right'></i>",
  //     ],
  //     responsive: {
  //       0: {
  //         items: 1,
  //       },
  //       600: {
  //         items: 2,
  //       },
  //       1000: {
  //         items: 3,
  //       },
  //       1300: {
  //         items: 4,
  //       },
  //     },
  //   });
  //   window.$(".client-carousel").owlCarousel({
  //     loop: true,
  //     margin: 20,
  //     nav: false,
  //     arrows: true,
  //     dots: true,
  //     navText: [
  //       "<i class='fa fa-chevron-left'></i>",
  //       "<i class='fa fa-chevron-right'></i>",
  //     ],
  //     responsive: {
  //       0: {
  //         items: 1,
  //       },
  //       600: {
  //         items: 2,
  //       },
  //       1000: {
  //         items: 3,
  //       },
  //       1300: {
  //         items: 3,
  //       },
  //     },

  //   });

  // }, [])

  //   useEffect(() => {

  // let ddToggler = document.querySelector(".dropdown-container");
  // var ddTogglerpseudo = window?.CSSRulePlugin.getRule("button.dropdown-toggler:after");
  //     let serviceMenu = document.querySelector(".services_dropDown");
  //     let sManimation = window?.gsap.timeline();
  //     let sManimation2 = window?.gsap.timeline();

  //     if (window.innerWidth > 1000) {
  //       sManimation.pause();
  //       sManimation2.pause();
  //     } else {
  //       sManimation.reverse(-1);
  //       sManimation.reversed(true);
  //       sManimation2.reverse(-1);
  //       sManimation2.reversed(true);
  //     }

  //     sManimation.to(serviceMenu, {
  //       opacity: 1,
  //       y: 0,
  //     });

  //     if (window.innerWidth < 1000) {
  //       document.addEventListener("click", function (e) {
  //         if (
  //           e.target.classList.contains("serviceCard") ||
  //           e.target.classList.contains("dropdown-toggler")
  //         ) {
  //           console.log(e.target.classList);
  //           sManimation.reversed(!sManimation.reversed());
  //           sManimation2.reversed(!sManimation2.reversed());
  //         } else {
  //           sManimation.reverse();
  //           sManimation2.reverse();
  //         }
  //       });
  //     }

  //     sManimation.to(serviceMenu, {
  //       opacity: 1,
  //       y: 0
  //     });
  //     sManimation2.to(ddTogglerpseudo, 0.5, {
  //       cssRule: {
  //         rotate: 0,
  //       },
  //     });

  //     ddToggler.addEventListener("mouseenter", function (e) {
  //       if (window.innerWidth > 1000) {
  //         sManimation.play();
  //         sManimation2.play();
  //       }
  //     });
  //     ddToggler.addEventListener("mouseleave", function (e) {
  //       if (window.innerWidth > 1000) {
  //         sManimation.reverse();
  //         sManimation2.reverse();
  //       }
  //     });

  //     let borgir = document.getElementById("borgir");
  //     let fsm = document.querySelector(".fullscreenMenu");
  //     let body = document.querySelector("body");
  //     let links = document.querySelectorAll(".menu__links");

  //     setTimeout(function () {
  //       fsm.style.display = "flex";
  //       fsm.style.top = "0";
  //     }, 200);

  //     Array.from(links).forEach((link) => {
  //       link.addEventListener("click", function (e) {
  //         fsm.classList.remove("active");
  //         // body.classList.remove("overflow-hidden");
  //         borgir.classList.toggle("active");
  //       });
  //     });
  //     borgir.addEventListener("click", function () {

  //       fsm.classList.toggle("active");
  //       // body.classList.toggle("overflow-hidden");
  //       borgir.classList.toggle("active");
  //     });

  //     let fadein = document.getElementsByClassName("fade-in");
  //     let riseUp = document.querySelectorAll(".rise-up");

  //     window?.gsap.to(".hero-h1", {
  //       scrollTrigger: ".hero__wrap", // start the animation when ".box" enters the viewport (once)
  //       y: 0,
  //       delay: 1,
  //       duration: 1.5,
  //       stagger: 1,
  //     });
  //     window?.gsap.to(".hero-subline", {

  //       opacity: 1,
  //       delay: 2.5,
  //       duration: 1.5,
  //     });
  //     window?.gsap.from(".hero-link", {
  //       opacity: 0,
  //       delay: 3,
  //       duration: 1.5,
  //     });
  //     window?.gsap.from(".hero-banner", {
  //       opacity: 0,
  //       delay: 0.5,
  //       duration: 1,
  //     });
  //   }, [window?.gsap]);
  useEffect(() => {
  
    window?.gsap.to(".hero-h1", {
      scrollTrigger: ".hero__wrap", // start the animation when ".box" enters the viewport (once)
      y: 0,
      delay: 1,
      duration: 1.5,
      stagger: 1
  });
  window?.gsap.to(".hero-subline", {
      opacity: 1,
      delay: 3.5,
      duration: 1.5
  });
  window?.gsap.from(".hero-link", {
      opacity: 0,
      delay: 4,
      duration: 1.5
  });
  window?.gsap.from(".hero-banner", {
      opacity: 0,
      delay: .5,
      duration: 1
  });
  }, [window?.gsap]);


  
  useEffect(() => {
    setCount((prevCount) => prevCount + 1);
  }, [data]);

  return (
    <div>
      <section className="hero">
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <div className="col-lg-8">
              <img
                src="images/hero.jpg"
                className="img-fluid hero-banner"
                alt=""
              />
            </div>
            <div className="col-lg-4">
              <div className="hero__wrap">
                <div className="overflow-hidden">
                  <h1 className="hero-h1">Your Website</h1>
                </div>
                <div className="overflow-hidden mb-3">
                  <h1 className="hero-h1">Your Story</h1>
                </div>
                <p className="hero-subline">
                  When you partner with Fire Up Design you are guaranteed
                  affordable web design and a unique, user-friendly website that
                  allows your business to shine.
                </p>
                <Link to="/our-story" className="orange-link hero-link">
                  Learn More <i className="fas fa-chevron-right ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="content-body" id="our-story">
        <div className="container-fluid px-lg-5 px-3">
          <div className="row align-items-center ">
            <div className="col-12 text-center mb-5">
              <h3 className="heading-3">Our Story</h3>
              <p className="body-text-18">
                "They can’t order me to stop dreaming"
              </p>
              <p className="body-text-16">- Brothers Grimm, ‘Cinderella’</p>
            </div>
          </div>
          <div className="row align-items-center mt-5">
            <div className="col-lg-6 mb-3 mb-lg-0 ">
              <h4 className="heading-4">Why choose us</h4>
              <p className="fw-body-text mt-3">
                We don’t just create designs and build websites. We create
                experiences and build relationships too, because when you’re
                happy, we’re happy. We’ll always listen to what you want and
                deliver something that really works for you, and you can count
                on an authentic, honest experience from the outset.
              </p>
              <p className="fw-body-text mt-3">
                We’re renowned for our professionalism, design skills and timely
                delivery, and because we’re a relatively small team you’re
                guaranteed a personal experience. We also know that budgets are
                important, which is why we pride ourselves on creating
                exceptional products at a surprisingly affordable price. And
                most of all, our clients choose us because we create impactful,
                beautiful, brand defining designs that people love.
              </p>
              <Link to="/contact-us" className="orange-link mt-3">
                Contact Us <i className="fas fa-chevron-right ml-2" />
              </Link>
            </div>
            <div className="col-lg-6 mb-3 mb-lg-0">
              <div className="position-relative bg-frame">
                <img
                  src="images/our-story.png"
                  className="img-fluid w-100 h-100"
                  alt=""
                />
                <p className="picture-tag">Dream</p>
                <img src="images/frame-wood.png" className="frame" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="our-chapter" className="content-body pb-extra">
        <div className="container-fluid px-lg-5 px-3">
          <div className="row fade-in">
            <div className="col-12 text-center">
              <h3 className="heading-3">Our Chapters</h3>
              <p className="body-text-18">
                "Imagination is the only weapon in the war with reality"
              </p>
              <p className="body-text-16">
                - Lewis Carroll, ‘Alice in Wonderland’
              </p>
            </div>
          </div>
          <div className="row margin-more align-items-center fade-in">
            <div className="col-lg-6 mb-3 mb-lg-0 switch-order">
              <div className="position-relative bg-frame bg-frame">
                <img
                  src="images/chapter-1.png"
                  className="img-fluid w-100 h-100 "
                  alt=""
                />
                <p className="picture-tag">Create</p>
                <img src="images/frame-wood.png" className="frame" alt="" />
              </div>
            </div>
            <div className="col-lg-6 mb-3 mb-lg-0 ">
              <h4 className="heading-4">Web design &amp; development</h4>
              <div className="tags-parent">
                <span className="tag">Wordpress</span>
                <span className="tag">eCommerce</span>
                <span className="tag">HTML</span>
                <span className="tag">CSS</span>
              </div>
              <p className="fw-body-text">
                We build, create and maintain websites that are easy on the eye
                and simple to navigate. Our website design and development
                services are all about giving your customers a fully functional,
                secure and user friendly experience that adds real value to your
                growing business.
              </p>
              <Link to="/web-design" className="orange-link mt-3">
                Learn More <i className="fas fa-chevron-right ml-2" />
              </Link>
            </div>
          </div>
          <div className="row margin-more align-items-center fade-in">
            <div className="col-lg-6 mb-3 mb-lg-0 ">
              <h4 className="heading-4">Search Engine Optimisation </h4>
              <div className="tags-parent">
                <span className="tag">Seo</span>
                <span className="tag">Organic</span>
                <span className="tag">Paid</span>
                <span className="tag">Analytics</span>
              </div>
              <p className="fw-body-text">
                Getting found online is tricky in an increasingly crowded
                marketplace. We specialise in creating and delivering highly
                effective SEO strategies that will improve your business ranking
                on Google and other popular search engines.
              </p>
              <Link
                to="/search-engine-optimisation"
                className="orange-link mt-3"
              >
                Learn More <i className="fas fa-chevron-right ml-2" />
              </Link>
            </div>
            <div className="col-lg-6 mb-3 mb-lg-0 switch-order">
              <div className="position-relative bg-frame">
                <img
                  src="images/seo-img.jpg"
                  className="img-fluid w-100 h-100"
                  alt=""
                />
                <p className="picture-tag">Expand</p>
                <img src="images/frame-wood.png" className="frame" alt="" />
              </div>
            </div>
          </div>
          <div className="row margin-more align-items-center fade-in">
            <div className="col-lg-6 mb-3 mb-lg-0">
              <div className="position-relative bg-frame">
                <img
                  src="images/chapter-2.png"
                  className="img-fluid w-100 h-100"
                  alt=""
                />
                <p className="picture-tag">Imagine</p>
                <img src="images/frame-wood.png" className="frame" alt="" />
              </div>
            </div>
            <div className="col-lg-6 mb-3 mb-lg-0 px-lg-5 px-3">
              <h4 className="heading-4">Graphic design services</h4>
              <div className="tags-parent">
                <span className="tag">Branding</span>
                <span className="tag">Creative</span>
                <span className="tag">Illustrations</span>
                <span className="tag">Art</span>
              </div>
              <p className="fw-body-text">
                Good graphic design is about creating images that people can
                understand and recognise. Great graphic design is about creating
                images that are memorable, impactful and ooze quality. It’s
                often said that a picture paints a thousand words, and that’s
                exactly what our graphics will do for your brand.
              </p>
              <Link to="/graphic-design" className="orange-link mt-3">
                Learn More <i className="fas fa-chevron-right ml-2" />
              </Link>
            </div>
          </div>
          <div className="row margin-more align-items-center fade-in">
            <div className="col-lg-6 mb-3 mb-lg-0 ">
              <h4 className="heading-4">Mobile app development</h4>
              <div className="tags-parent">
                <span className="tag">iOS</span>
                <span className="tag">Android</span>
                <span className="tag">Hybrid</span>
                <span className="tag">Ux/Ui</span>
              </div>
              <p className="fw-body-text">
                These days it seems like there’s an app for everything, which
                means that your customers will expect one from you, too. We
                design and develop great looking apps that are functional, easy
                to use and will add real value to your business.
              </p>
              <Link to="/mobile-app-development" className="orange-link mt-3">
                Learn More <i className="fas fa-chevron-right ml-2" />
              </Link>
            </div>
            <div className="col-lg-6 mb-3 mb-lg-0 switch-order">
              <div className="position-relative bg-frame">
                <img
                  src="images/chapter-4.png"
                  className="img-fluid w-100 h-100"
                  alt=""
                />
                <p className="picture-tag">Discover</p>
                <img src="images/frame-wood.png" className="frame" alt="" />
              </div>
            </div>
          </div>
          <div className="row margin-more align-items-center fade-in">
            <div className="col-lg-6 mb-3 mb-lg-0">
              <div className="position-relative bg-frame">
                <img
                  src="images/chapter-3.png"
                  className="img-fluid w-100 h-100"
                  alt=""
                />
                <p className="picture-tag">Adventure</p>
                <img src="images/frame-wood.png" className="frame" alt="" />
              </div>
            </div>
            <div className="col-lg-6 mb-3 mb-lg-0 px-lg-5 px-3">
              <h4 className="heading-4">Social media marketing (Smm)</h4>
              <div className="tags-parent">
                <span className="tag">Paid Media</span>
                <span className="tag">Community</span>
                <span className="tag">Campaigns</span>
                <span className="tag">Marketing</span>
              </div>
              <p className="fw-body-text">
                Engaging with customers in a fast moving digital landscape
                demands a social media strategy that builds trust and sparks
                minds. We’ll help you set achievable goals and deliver original,
                authentic content that’s relevant, on-trend and highly
                shareable.
              </p>
              <Link to="/social-media-marketing" className="orange-link mt-3">
                Learn More <i className="fas fa-chevron-right ml-2" />
              </Link>
            </div>
          </div>
          <div className="row margin-more fade-in">
            <div className="col-12 text-center">
              <p className="body-text-18">
                "When we get to the end of the story you will know more than you
                do now"
              </p>
              <p className="body-text-16">
                - Hans Christian Anderson, ‘The Snow Queen’
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="collections" className="collection">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="row fade-in">
                <div className="col-12 text-center">
                  <h3 className="heading-3">Our collection</h3>
                  <p className="body-text-18">
                    Have a look at our latest work we are really proud of it
                  </p>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-12 text-right mb-3 fade-in">
                  <Link to="/our-collections" className="black-link">
                    See All Portfolio{" "}
                    <i className="fas fa-chevron-right ml-2" />{" "}
                  </Link>
                </div>
                <div className="col-12">
                  {/* <div className="collection-carousel owl-carousel">
                   */}
                  <OwlCarousel
                    className="collection-carousel owl-carousel"
                    items={4}
                    loop
                    margin={2}
                    nav={true}
                  >
                    {data && data?.data?.portfolios?.length > 0
                      ? data?.data?.portfolios?.map((item, index) => (
                          <PortfolioItem
                            Count={Count}
                            key={index}
                            data={item}
                          />
                        ))
                      : ""}
                  </OwlCarousel>
                  {/* </div> */}
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
                                Get in touch and lets get those creative juices
                                flowing
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
                                    <button
                                      type="submit"
                                      className="form-submit"
                                    >
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
                                  <a href="telto:+447912108120">
                                    +44 79 121 08 120
                                  </a>
                                </li>
                                <li>
                                  <a href="telto:+441276489005">
                                    +44 1276 489 005
                                  </a>
                                </li>
                                <li>
                                  <p className="social-heading">
                                    Connect with us
                                  </p>
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

                  {/* <Contact /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default Home;
