import React from "react";

const Blog = () => {
  return (
    <div>
      <div>
        <section className="hero">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div className="col-lg-8">
                <img
                  src="images/blog-banner.jpg"
                  className="img-fluid hero-banner"
                  alt=""
                />
              </div>
              <div className="col-lg-4">
                <div className="hero__wrap">
                  <div className="overflow-hidden">
                    <h1 className="hero-h1">Our Blog</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content-body" id="our-blog">
          <div className="custom-container-wrap pt-0 pb-0">
            <div className="row align-items-center ">
              <div className="col-12 col-lg-10 m-auto">
                <div className="row">
                  <div className="col-12 text-center pb-4">
                    <h3 className="heading-3">Our blog</h3>
                    <p className="body-text-18 font-weight-bold">
                      Some of our blog posts
                    </p>
                  </div>
                  <div className="col-12">
                    <div className="post-card bg-white">
                      <div className="card-header">
                        <div className="position-relative">
                          <img
                            src="images/post-1.jpg"
                            className="img-fluid w-100 h-100 "
                            alt=""
                          />
                          <div className="post-tag">
                            <span className="date d-block">20</span>
                            <span className="month d-block">Oct</span>
                          </div>
                        </div>
                      </div>
                      <div className="card-body p-0 py-4">
                        <h4 className="heading-4">
                          Social media marketing (Smm)
                        </h4>
                        <div className="tags-parent">
                          <span className="tag">Branding</span>
                          <span className="tag">Paid Media</span>
                          <span className="tag">Social Media</span>
                          <span className="tag">Website</span>
                        </div>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the when an
                          unknown printer took a galley of type and scrambled it
                          to make a type specimen book. It has survived not only
                          five centuries, but also the leap into electronic
                          typesetting, remaining essentially unchanged. It was
                          popularised in the with the release of Letraset sheets
                          containing Lorem Ipsum passages, and more recently
                          with desktop publishing software like Aldus PageMaker
                          including versions of Lorem Ipsum.
                        </p>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the when an
                          unknown printer took a galley of type and scrambled it
                          to make a type specimen book.{" "}
                        </p>
                      </div>
                      <div className="card-footer text-center text-lg-right p-0">
                        <ul className="social bg-white d-inline-flex justify-content-center justify-content-lg-end px-3 position-relative z-inxed-1">
                          <li>
                            <a href="javascript:void(0)">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="post-card bg-white">
                      <div className="card-header">
                        <div className="position-relative">
                          <img
                            src="images/post-2.jpg"
                            className="img-fluid w-100 h-100 "
                            alt=""
                          />
                          <div className="post-tag">
                            <span className="date d-block">20</span>
                            <span className="month d-block">Oct</span>
                          </div>
                        </div>
                      </div>
                      <div className="card-body p-0 py-4">
                        <h4 className="heading-4">
                          Social media marketing (Smm)
                        </h4>
                        <div className="tags-parent">
                          <span className="tag">Branding</span>
                          <span className="tag">Paid Media</span>
                          <span className="tag">Social Media</span>
                          <span className="tag">Website</span>
                        </div>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the when an
                          unknown printer took a galley of type and scrambled it
                          to make a type specimen book. It has survived not only
                          five centuries, but also the leap into electronic
                          typesetting, remaining essentially unchanged. It was
                          popularised in the with the release of Letraset sheets
                          containing Lorem Ipsum passages, and more recently
                          with desktop publishing software like Aldus PageMaker
                          including versions of Lorem Ipsum.
                        </p>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the when an
                          unknown printer took a galley of type and scrambled it
                          to make a type specimen book.{" "}
                        </p>
                      </div>
                      <div className="card-footer text-center text-lg-right p-0">
                        <ul className="social bg-white d-inline-flex justify-content-center justify-content-lg-end px-3 position-relative z-inxed-1">
                          <li>
                            <a href="javascript:void(0)">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="post-card bg-white">
                      <div className="card-header">
                        <div className="position-relative">
                          <div className="post-video">
                            <video
                              width="100%"
                              height={515}
                              poster="images/post-3.jpg"
                              controls
                            >
                              <source
                                src="images/mov_bbb.mp4"
                                type="video/mp4"
                              />
                              <source
                                src="images/mov_bbb.ogg"
                                type="video/ogg"
                              />
                              Your browser does not support HTML video.
                            </video>
                          </div>
                          <div className="post-tag">
                            <span className="date d-block">20</span>
                            <span className="month d-block">Oct</span>
                          </div>
                        </div>
                      </div>
                      <div className="card-body p-0 py-4">
                        <h4 className="heading-4">
                          Social media marketing (Smm)
                        </h4>
                        <div className="tags-parent">
                          <span className="tag">Branding</span>
                          <span className="tag">Paid Media</span>
                          <span className="tag">Social Media</span>
                          <span className="tag">Website</span>
                        </div>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the when an
                          unknown printer took a galley of type and scrambled it
                          to make a type specimen book. It has survived not only
                          five centuries, but also the leap into electronic
                          typesetting, remaining essentially unchanged. It was
                          popularised in the with the release of Letraset sheets
                          containing Lorem Ipsum passages, and more recently
                          with desktop publishing software like Aldus PageMaker
                          including versions of Lorem Ipsum.
                        </p>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the when an
                          unknown printer took a galley of type and scrambled it
                          to make a type specimen book.{" "}
                        </p>
                      </div>
                      <div className="card-footer text-center text-lg-right p-0">
                        <ul className="social bg-white d-inline-flex justify-content-center justify-content-lg-end px-3 position-relative z-inxed-1">
                          <li>
                            <a href="javascript:void(0)">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">
                              <i className="fab fa-instagram" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <nav className="mt-4">
                      <ul className="pagination">
                        <li className="page-item" aria-current="page">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                      </ul>
                    </nav>
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

export default Blog;
