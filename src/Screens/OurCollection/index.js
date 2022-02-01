import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

import { fetchPosts } from "../../Api/Posts";
import PortfolioItem from "../Home/PortfolioItem";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
const OurCollection = () => {
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
    window?.gsap.from(".hero-banner", {
      opacity: 0,
      delay: 0.5,
      duration: 1,
    });

    
  }, [window?.gsap]);

  useEffect(() => {
    try {
      window.addEventListener("load", gridOnload);

      function gridOnload() {
        let Masonry = window?.Masonry;

        var grid = document.querySelector(".grid");

        var msnry = new Masonry(grid, {
          // options...
          itemSelector: ".grid-item",
          //columnWidth: '.grid-sizer',
          columnWidth: 160,
          //percentPosition: true
        });

        // init with selector
        var msnry = new Masonry(".grid", {
          gutter: 10,
          //columnWidth: '.grid-sizer',
          // percentPosition: true
        });
      }
    } catch (error) {}
  }, [window?.Masonry]);

  const { data, error, isError, isLoading } = useQuery("posts", fetchPosts);
  console.log(data);
  return (
    <div>
      <div>
        <section className="hero">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div className="col-lg-8">
                <img
                  src="images/our-collection-banner.jpg"
                  className="img-fluid hero-banner"
                  alt=""
                />
              </div>
              <div className="col-lg-4">
                <div className="hero__wrap">
                  <div className="overflow-hidden">
                    <h1 className="hero-h1">Our Collection</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content-body" id="our-blog">
          <div className="container-fluid px-lg-5 px-3 pt-0 pb-5">
            <div className="row align-items-center ">
              <div className="col-12 m-auto">
                <div className="row">
                  <div className="col-12 col-lg-10 col-xl-8 m-auto text-center pb-5">
                    <h3 className="heading-3">Our collection</h3>
                    <p className="body-text-18 font-weight-normal mb-2">
                      We’re proud of our work and have lots of happy customers
                      who love it too. Every company we partner with is special
                      in their own way, so when you choose Fire Up Design you’ll
                      be guaranteed a personal experience that’s centred around
                      your unique business needs.
                    </p>
                    <p className="body-text-18 font-weight-normal mb-2">
                      Whether you’re a multi-national corporation, just starting
                      out, or somewhere in-between, we’ll dedicate ourselves to
                      creating something incredible just for you.
                    </p>
                    <p className="body-text-18 font-weight-normal">
                      Take a look at some of our latest projects and if you like
                      what you see, drop us a line.
                    </p>
                  </div>
                  <div className="col-12">
                    {/* <div className="grid"> */}
                    <ResponsiveMasonry
                      columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                    >
                      <Masonry columnsCount={3} gutters={10}>
                        {data && data?.data?.portfolios.length > 0
                          ? data?.data?.portfolios?.map((item) => (
                              //  <PortfolioItem data={item}/>

                              <Link to={`/portfolio/${item?.id}`}>
                                <img src={`${item?.process_image}`} alt="" />{" "}
                              </Link>
                            ))
                          : ""}

                        {/* </div> */}
                      </Masonry>
                    </ResponsiveMasonry>
                  </div>
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

export default OurCollection;
