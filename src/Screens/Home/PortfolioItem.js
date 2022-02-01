import React from "react";
import { Link } from "react-router-dom";

const PortfolioItem = ({ data }) => {
  return (
    <div className="item ru">
    <div className="collection-card rise-up">
      {/* <img src={data?.process_image ? data?.process_image : "images/collection-1.jpg"} className="img-fluid" alt="" /> */}
      <Link to={`/portfolio/${data?.id}`}>
        <img
          className="img-fluid"
          src={`${data?.process_image}`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `${process.env.PUBLIC_URL}/images/collection-1.jpg`;
          }}
          alt="Not Found"
        /> 
        <div className="collection-card-body">
          <div className="row no-gutters mt-2">
            <div className="col-12">
              <span className="collection-author">{data?.title}</span>{" "}
              <span className="separate">|</span>{" "}
              <span className="collection-tag">Design</span>
            </div>
          </div>
          <div className="row no-gutters mt-2">
            <div className="col-12">
              <h5 className="collection-title">Viasat history</h5>
              <p className="collection-excerpt p-0">
                Viasat World is an international TV company....
              </p>
            </div>
          </div>
          <div className="row no-gutters mt-2">
            <div className="col-12">
              <a href="javascript:void(0)" className="orange-link">
                Learn More <i className="fas fa-chevron-right ml-2" />
              </a>
            </div>
          </div>
        </div>
      </Link>
    </div>
    </div>
  );
};

export default PortfolioItem;
