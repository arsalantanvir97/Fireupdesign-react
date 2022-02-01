import React from "react";

const DocumentItem = ({
  data,
  index,
  RemoveRow,
  ShipmentTypes,
  handleTypeSelection,
  handleDocument,
}) => {
  console.log("data", data);

  return (
    <div>
      <div className="row copy-document-main-input">
        <div className="col-lg-4 col-xl-2 mb-3 mb-xl-0">
          <div className="row">
            <div className="col-12 mb-2">
              <label htmlFor className="general-label-dark mb-0 pl-3">
                Document Type <span className="red-span">*</span>
              </label>
            </div>
            <div className="col-12">
              <select
                className="custom-select"
                onChange={(e) => handleTypeSelection(e, index)}
                required
              >
                {" "}
                <option value="">Select Document Type</option>
                {ShipmentTypes?.docs?.length > 0
                  ? ShipmentTypes?.docs?.map((item) => (
                      <option value={JSON.stringify(item)}>{item?.name}</option>
                    ))
                  : ""}
                <option value="custom">custom</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-xl-5 mb-3 mb-xl-0">
          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-12 mb-2">
                  <label htmlFor className="general-label-dark mb-0 pl-3">
                    Quantity <span className="red-span">*</span>
                  </label>
                </div>
                <div className="col-12">
                  <input
                    type="number"
                    min="1"
                    className="custom-text pl-2"
                    placeholder="Add Quantity"
                    name="quantity"
                    value={data?.quantity}
                    onChange={(e) => handleDocument(e, index)}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-12 mb-2">
                  <label htmlFor className="general-label-dark mb-0 pl-3">
                    Weight Per Piece (In kg) <span className="red-span">*</span>
                  </label>
                </div>
                <div className="col-12">
                  <input
                    type="number"
                    min="1"
                    className="custom-text pl-2"
                    placeholder="Add Weight"
                    name="weight"
                    value={data?.weight}
                    onChange={(e) => handleDocument(e, index)}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-10 col-xl-4">
          <div className="row">
            <div className="col-12 mb-2">
              <label htmlFor className="general-label-dark mb-0 pl-3">
                Dimensions (In Inches) <span className="red-span">*</span>
              </label>
            </div>
            <div className="col-12">
              <div className="row no-gutters">
                <div className="col-lg-4 pr-2 mb-3 mb-lg-0">
                  <input
                    type="text"
                    className="custom-text pl-2"
                    placeholder="Length"
                    value={data?.dimensions?.length}
                  />
                </div>
                <div className="col-lg-4 pr-2 mb-3 mb-lg-0">
                  <input
                    type="text"
                    className="custom-text pl-2"
                    placeholder="Width"
                    value={data?.dimensions?.width}
                    required
                  />
                </div>
                <div className="col-lg-4 pr-2 mb-3 mb-lg-0">
                  <input
                    type="text"
                    className="custom-text pl-2"
                    placeholder="Height"
                    value={data?.dimensions?.height}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-xl-1 d-flex align-items-end justify-content-lg-end">
          {index != 0 ? (
            <button
              className="document-cancel"
              onClick={() => RemoveRow(index)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7.096"
                height="7.096"
                viewBox="0 0 7.096 7.096"
              >
                <path
                  id="Icon_metro-cross"
                  data-name="Icon metro-cross"
                  d="M9.6,7.629h0L7.45,5.476,9.6,3.323h0a.222.222,0,0,0,0-.314L8.585,1.993a.222.222,0,0,0-.314,0h0L6.119,4.146,3.966,1.993h0a.222.222,0,0,0-.314,0L2.636,3.01a.222.222,0,0,0,0,.314h0L4.788,5.476,2.636,7.629h0a.222.222,0,0,0,0,.314L3.653,8.96a.222.222,0,0,0,.314,0h0L6.119,6.807,8.272,8.96h0a.222.222,0,0,0,.314,0L9.6,7.943a.222.222,0,0,0,0-.314Z"
                  transform="translate(-2.571 -1.928)"
                  fill="#707070"
                />
              </svg>
            </button>
          ) : (
            ""
          )}
        </div>
        <div className="col-12">
          <p className="estimated-cost-text mt-3 pl-3 mb-0">
            Estimated Cost: $10
          </p>
        </div>
      </div>
    </div>
  );
};

export default DocumentItem;
