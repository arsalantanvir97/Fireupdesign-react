import React from "react";

export default function LoadingBtn({ className }) {
  return (
    <button className={className} disabled={true}>
      <i className="fas fa-circle-notch fa-spin"></i> Loading
    </button>
  );
}
