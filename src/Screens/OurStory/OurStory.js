import React, { useEffect } from "react";
import { connect } from "react-redux";

const Story = () => {
  useEffect(() => {
    window.$(".collection-carousel").owlCarousel({
      loop: true,
      items: 4,
      margin: 10,
      nav: true,
      arrows: true,
      dots: false,
      navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
        1300: {
          items: 4,
        },
      },
    });
    window.$(".client-carousel").owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      arrows: true,
      dots: true,
      navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
        1300: {
          items: 3,
        },
      },
    });
  }, [window?.$]);

  useEffect(() => {
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
      fsm.classList.toggle("active");
      // body.classList.toggle("overflow-hidden");
      borgir.classList.toggle("active");
    });

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
        delay: 4,
        duration: 1.5
    });
    window?.gsap.from(".hero-banner", {
        opacity: 0,
        delay: .5,
        duration: 1
    });
  }, [window?.gsap]);

  return (
    <div>
      <section className="hero">
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <div className="col-lg-8">
              <img
                src="images/our-story-banner.jpg"
                className="img-fluid hero-banner"
                alt=""
              />
            </div>
            <div className="col-lg-4">
              <div className="hero__wrap">
                <div className="overflow-hidden mb-3">
                  <h1 className="hero-h1">Our Story</h1>
                </div>
                <p className="hero-subline">Just Imagine and we create</p>
                {/* <a href="javascript:void(0)" class="orange-link hero-link">Learn More <i class="fas fa-chevron-right ml-2"></i></a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="content-body" id="our-story">
        <div className="custom-container-wrap">
          <div className="row align-items-center">
            <div className="col-12 text-center mb-0">
              <h3 className="heading-3">Our story</h3>
              <p className="body-text-18">
                "They can’t order me to stop dreaming"
              </p>
              <p className="body-text-16">- Brothers Grimm, ‘Cinderella’</p>
            </div>
          </div>
          <div className="row align-items-center mt-4 mt-lg-5">
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
                We renowned for our professionalism, design skills and timely
                delivery, and because we’re a relatively small team you’re
                guaranteed a personal experience. We also know that budgets are
                important, which is why we pride ourselves on creating
                exceptional products at a surprisingly affordable price. And
                most of all, our clients choose us because we create impactful,
                beautiful, brand defining designs that people love.
              </p>
            </div>
            <div className="col-lg-6 mb-3 mb-lg-0">
              <div className="position-relative bg-frame h-auto">
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
      {/* <section class="content-body" id="projects-step">
<div class="container-fluid p-0">
    <div class="row no-gutters">
        <div class="col-12">
            <img src="images/step-banner.jpg" class="" alt="">
        </div>
    </div>
    <div class="project-steps-wrap custom-container-wrap pb-0 pb-sm-0">
        <div class="row">
            <div class="col-12 col-lg-6 mb-4 mb-lg-5 d-flex">
                <div class="media project-steps">
                    <div class="media-left align-self-start mr-4">01</div>
                    <div class="media-body">
                        <h5 class="mt-0"><span class="d-lg-block">Discover</span>Information gathering</h5>
                        <p class="body-text-16 font-weight-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-6 mb-4 mb-lg-5 d-flex">
                <div class="media project-steps">
                    <div class="media-left align-self-start mr-4">02</div>
                    <div class="media-body">
                        <h5 class="mt-0"><span class="d-lg-block">Define</span>Strategic brand definition</h5>
                        <p class="body-text-16 font-weight-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-6 mb-4 mb-lg-5 d-flex">
                <div class="media project-steps">
                    <div class="media-left align-self-start mr-4">03</div>
                    <div class="media-body">
                        <h5 class="mt-0"><span class="d-lg-block">Design</span>Creative implementation</h5>
                        <p class="body-text-16 font-weight-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-6 mb-4 mb-lg-5 d-flex">
                <div class="media project-steps">
                    <div class="media-left align-self-start mr-4">04</div>
                    <div class="media-body">
                        <h5 class="mt-0"><span class="d-lg-block">Delight</span>Roll out and refine</h5>
                        <p class="body-text-16 font-weight-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section> */}
      {/* <section class="content-body" id="projects-gallery">
<div class="container-fluid p-0">
    <div class="row no-gutters">
        <div class="col-12 col-lg-6 d-flex pr-lg-2">
            <div class="gallery-wrap w-100 d-flex justify-content-center justify-content-lg-end">
                <div class="gallery-content align-self-center py-5 py-lg-0 pl-lg-0 pr-xl-5 mx-4 mx-xl-5">
                    <h4 class="heading-4 text-white">Every single time</h4>
                    <p class="body-text-16 font-weight-normal text-justify text-white mb-4"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p class="body-text-16 font-weight-normal text-justify text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

            </div>
        </div>
        <div class="col-12 col-lg-6">
            <div class="row no-gutters mt-3 mt-lg-0 mb-3">
                <div class="col-12 col-md-6 px-2">
                    <img src="images/gallery-1.jpg" class="img-fluid w-100 h-100" alt="">
                </div>
                <div class="col-12 col-md-6 px-2">
                    <img src="images/gallery-2.jpg" class="img-fluid w-100 h-100" alt="">
                </div>
            </div>
            <div class="row no-gutters">
                <div class="col-12 col-md-6 px-2">
                    <img src="images/gallery-3.jpg" class="img-fluid w-100 h-100" alt="">
                </div>
                <div class="col-12 col-md-6 px-2">
                    <img src="images/gallery-4.jpg" class="img-fluid w-100 h-100" alt="">
                </div>
            </div>
        </div>
    </div>
</div>
</section> */}
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default Story;
