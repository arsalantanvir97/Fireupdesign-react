import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getBaseUrl } from "../../Utils/Helpers";

export default function ImageSelector({
  onChange,
  value,
  className,
  style,
  is_edit,
  accept,
}) {



  const [defaultImage, setDefaultImage] = useState();
  const imageRef = useRef();

  useEffect(() => {
    setDefaultImage(`${getBaseUrl()}${value}`);
    if (value && typeof value !== "string") {
      const objectURL = URL.createObjectURL(value);
      setDefaultImage(objectURL);
      return () => URL.revokeObjectURL(objectURL);
    }
  }, [value]);

  const showOpenFileDialog = () => {
    imageRef.current.click();
  };
  

  const handleChange = (event) => {
    const file = event.target.files[0];

    onChange(file);
  };

  return (
    <div>
      {value ? (
        <img
          src={defaultImage}
          alt="noimage"
          className={className ? className : "img-fluid"}
          style={
            style
              ? style
              : {
                  width: 128,
                  height: 128,
                  borderRadius: 60,
                }
          }
        />
      ) : (
        <div
          style={{
            height: 150,
            width: 150,
            border: "1px solid #E8E8E8",
            background: "#FCF9F9",
            borderRadius: 15,
            padding: 10,
            textAlign: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          onClick={is_edit ? showOpenFileDialog : null}
        >
          <i
            className="fa fa-upload"
            style={{
              fontSize: 50,
              color: "#999999",
              marginTop: 28,
            }}
          />
          <p className="mt-1">Upload Image</p>
        </div>
      )}

      <div className="input-group my-3" onClick={showOpenFileDialog}>
        <div className="input-group-append m-0">
          <div className="d-flex align-items-center">
            {is_edit && (
              <Link
                to="#"
                className="browse btn btn-transparent upload d-grey f-20"
              >
                <img
                  src="images/upload-icon.png"
                  alt=""
                  className="img-fluid mr-1"
                  style={{ display: "none" }}
                />
                Change Image
              </Link>
            )}
          </div>
        </div>
      </div>
      <input
        ref={imageRef}
        type="file"
        style={{ display: "none" }}
        accept={accept ? accept : "image/*"}
        onChange={handleChange}
        onClick={(event) => {
          event.target.value = null;
        }}
      />
    </div>
  );
}
