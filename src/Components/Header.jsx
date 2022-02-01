import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    let ddToggler = document.querySelector(".dropdown-container");
    var ddTogglerpseudo = window.CSSRulePlugin.getRule(
      "button.dropdown-toggler:after"
    );
    let serviceMenu = document.querySelector(".services_dropDown");
    let sManimation = window?.gsap.timeline();
    let sManimation2 = window?.gsap.timeline();

    if (window.innerWidth > 1000) {
      sManimation.pause();
      sManimation2.pause();
    } else {
      sManimation.reverse(-1);
      sManimation.reversed(true);
      sManimation2.reverse(-1);
      sManimation2.reversed(true);
    }

    sManimation.to(serviceMenu, {
      opacity: 1,
      y: 0,
    });
    sManimation2.to(ddTogglerpseudo, 0.5, {
      cssRule: {
        rotate: 0,
      },
    });

    ddToggler.addEventListener("mouseenter", function (e) {
      if (window.innerWidth > 1000) {
        sManimation.play();
        sManimation2.play();
      }
    });
    ddToggler.addEventListener("mouseleave", function (e) {
      if (window.innerWidth > 1000) {
        sManimation.reverse();
        sManimation2.reverse();
      }
    });

    serviceMenu.addEventListener("mouseenter", function (e) {
      if (window.innerWidth > 1000) {
        sManimation.play();
        sManimation2.play();
      }
    });
    serviceMenu.addEventListener("mouseleave", function (e) {
      if (window.innerWidth > 1000) {
        sManimation.reverse();
        sManimation2.reverse();
      }
    });

    // ddToggler.addEventListener("click", function (e) {
    //   if (window.innerWidth < 1000) {
    //     sManimation.reversed(!sManimation.reversed());
    //     sManimation2.reversed(!sManimation2.reversed());
    //   }
    // });

    if (window.innerWidth < 1000) {
      document.addEventListener("click", function (e) {
        if (
          e.target.classList.contains("serviceCard") ||
          e.target.classList.contains("dropdown-toggler")
        ) {
          console.log(e.target.classList);
          sManimation.reversed(!sManimation.reversed());
          sManimation2.reversed(!sManimation2.reversed());
        } else {
          sManimation.reverse();
          sManimation2.reverse();
        }
      });
    }

    let borgir = document.getElementById("borgir");
    let fsm = document.querySelector(".fullscreenMenu");
    let body = document.querySelector("body");
    let links = document.querySelectorAll(".menu__links");

    setTimeout(function () {
      fsm.style.display = "flex";
      fsm.style.top = "0";
    }, 200);

    Array.from(links).forEach((link) => {
      link.addEventListener("click", function (e) {
        fsm.classList.remove("active");
        // body.classList.remove("overflow-hidden");
        borgir.classList.toggle("active");
      });
    });
    borgir.addEventListener("click", function () {
      // alert('click')
      fsm.classList.toggle("active");
      // body.classList.toggle("overflow-hidden");
      borgir.classList.toggle("active");
    });

    
  }, [window?.gsap, window?.CSSRulePlugin]);

  return (
    <div>
      <header>
        <div className="bar">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 px-lg-5">
                <div className="d-flex align-items-center">
                  <Link to="/">
                    <img
                      src="images/logo.png"
                      className="img-fluid logo"
                      alt="logo"
                    />
                  </Link>
                  <button
                    type="button"
                    className="simple mx-4 menu js-menu x"
                    id="borgir"
                  >
                    <span className="line top" />
                    <span className="line middle" />
                    <span className="line bottom" />
                  </button>
                  <div className="dropdown-container">
                    <button className="dropdown-toggler simple" type="button">
                      Services
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="services_dropDown">
          <div className="wrapper">
            <div className="serviceCard">
              <Link to="/web-design">
                <div className="inner-w">
                  <div className="sc-top">
                    <img
                      src="images/service-d-4.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="sc-bot">
                    <h5 className="sc-title">Web design &amp; development</h5>
                    <p className="sc-excerpt">
                      We build, create and maintain user-friendly Websites with
                      the wow factor...
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="serviceCard">
              <Link to="/seo">
                <div className="inner-w">
                  <div className="sc-top">
                    <img
                      src="images/service-d-2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="sc-bot">
                    <h5 className="sc-title">Search engine Optimization</h5>
                    <p className="sc-excerpt">
                      Let us design your mobile app so that your business can
                      stay ahead of the pack...
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="serviceCard">
              <Link to="/graphic-design">
                <div className="inner-w">
                  <div className="sc-top">
                    <img
                      src="images/service-d-1.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="sc-bot">
                    <h5 className="sc-title">Design services</h5>
                    <p className="sc-excerpt">
                      Pictures say a thousand words. Lucky for you we know
                      how....
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="serviceCard">
              <Link to="/mobile-app-development">
                <div className="inner-w">
                  <div className="sc-top">
                    <img
                      src="images/service-d-3.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="sc-bot">
                    <h5 className="sc-title">App development</h5>
                    <p className="sc-excerpt">
                      Let us design your mobile app so that your business can
                      stay...
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="sc-d-footer text-center">
            <a href="javascript:void(0)" className="orange-link">
              View all services <i className="fas fa-chevron-right ml-2" />
            </a>
          </div>
        </div>
        <div className="fullscreenMenu">
          <ul className="menu-Main">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link className="menu__links" to="/our-story">
                Our story
              </Link>
            </li>
            <li>
              <Link className="menu__links" to="/our-chapters">
                Our chapters
              </Link>
            </li>
            <li>
              <Link className="menu__links" to="/our-collections">
                Our collection
              </Link>
            </li>
            <li>
              <Link className="menu__links" to="/blogs">
                Blogs
              </Link>
            </li>
            <li>
              <Link className="menu__links" to="/contact-us">
                Get in touch
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
