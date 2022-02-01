import React from "react";

const Banner = ({ title }) => {
  return (
    <section className="bg-main">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="bg-red text-left p-5">
              <h3 className="ff-1 fc-white display-1 mb-0">SPARTAN</h3>
              <h1 className="ff-1 fc-white display-4">MOBILE SOLUTION</h1>
              <p className="ff-2 fc-orange">
                Sell To The Military, Industrial Supply/Contracting
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
