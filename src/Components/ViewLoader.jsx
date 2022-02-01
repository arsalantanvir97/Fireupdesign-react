import React from "react";

export default function ViewLoader({ fontSize }) {
  return (
    <div className="app-content content view user">
      <div className="content-wrapper">
        <div className="content-body">
          <div
            style={{
             
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "50vh"
            }}
          >
            <i
              className="fas fa-circle-notch fa-spin"
              style={{ fontSize: fontSize ? fontSize : 35 }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}
