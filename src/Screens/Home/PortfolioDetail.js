import React, { useEffect, useState } from "react";
// import GetInTouch from "./GetInTouch";
// import Testimonials from "./Testimonials";
import { useLocation, withRouter } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import ViewLoader from "../../Components/ViewLoader";

const PortfolioDetail = ({ match }) => {
  const [portfolioDetail, setPortfolioDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  const getProfolioDetail = async (id) => {
    try {
      const { data } = await axios.get(
        `https://fireupdesign.com/admin/api/portfolio/${id}`
      );
      console.log("data", data);
      setPortfolioDetail(data?.portfolio);
      setLoading(false);
    } catch (error) {
      toast.error(error.msg);
    }
  };

  function createMarkup(data) {
    return { __html: data };
  }

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("match.params", match);
    getProfolioDetail(match.params.id);
  }, [match.params.id]);

  return (
    <>
      {loading || portfolioDetail == null ? (
       <ViewLoader fontSize="100px" />
      ) : (
        <div>
          <section className="portfolio-detail">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-12">
                  <img
                    src={`${portfolioDetail?.image}`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `${process.env.PUBLIC_URL}/images/cinnamon sue_2.jpg`;
                    }}
                    alt="Not Found"
                  />
                </div>
                <div className="col-md-6 col-12">
                  <h1
                    className="wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay="0.2s"
                  >
                    {portfolioDetail?.title}
                  </h1>

                  <p
                    className="orange-p wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay="0.6s"
                  >
                    ABOUT THE CLIENT
                  </p>
                  <p
                    className="wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay="0.4s"
                  >
                    {portfolioDetail?.short_description}
                  </p>
                </div>
                <div className="col-12">
                  <div dangerouslySetInnerHTML={createMarkup(portfolioDetail?.description)} />
                </div>

                <div className="col-12 text-center mt-5">
                  <img
                    src={`${portfolioDetail?.image}`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `${process.env.PUBLIC_URL}/images/cinnamon sue_2.jpg`;
                    }}
                    alt="Not Found"
                  />
                </div>
              </div>
              <div className="row mt-5 align-items-center">
                <div className="col-md-6 col-12">
                  <h4
                    className="wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay="0.2s"
                  >
                    THE SOLUTION
                  </h4>
                  <p
                    className="wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay="0.4s"
                  >
                    <div dangerouslySetInnerHTML={createMarkup(portfolioDetail?.solution)} />
                  </p>
                </div>
                <div className="col-md-6 col-12">
                  <img
                    src={`${portfolioDetail?.solution_image}`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `${process.env.PUBLIC_URL}/images/cinnamon sue_2.jpg`;
                    }}
                    alt="Not Found"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="profile-info portfolio-detail">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-4 col-12">
                  <img
                    src={`${portfolioDetail?.process_image}`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `${process.env.PUBLIC_URL}/images/cinnamon sue_2.jpg`;
                    }}
                    alt="Not Found"
                  />
                </div>
                <div className="col-md-8 col-12">
                  <h4
                    className="wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay="0.2s"
                  >
                    THE PROCESS
                  </h4>
                  <p
                    className="wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay="0.4s"
                  >
                    {portfolioDetail?.process}
                    <i
                      class="fa fa-arrow-circle-right"
                      aria-hidden="true"
                    ></i>{" "}
                    We got in touch{" "}
                    <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>{" "}
                    Asked a few questions{" "}
                    <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>{" "}
                    And sent through our proposal{" "}
                    <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>{" "}
                    Once the proposal was accepted we started with the design
                    and development by adding content, images, Instagram
                    integration and made sure all of the products were in the
                    shop page{" "}
                    <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>{" "}
                    We communicated with our client along the way until we were
                    able to deliver the final product timeously and
                    satisfactorily.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* <Testimonials />
          <GetInTouch /> */}
        </div>
      )}
    </>
  );
};

export default withRouter(PortfolioDetail);
