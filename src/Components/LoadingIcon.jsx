import React from "react";

export default function LoadingIcon({ fontSize }) {
  return (
    <i
      className="fas fa-circle-notch fa-spin"
      style={{ fontSize: fontSize ? fontSize : 35 }}
    ></i>
  );
}
