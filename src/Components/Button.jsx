import React from "react";
// import BlockUi from "react-block-ui";
// import "react-block-ui/style.css";

export default function Button({
  loading,
  children,
  onClick,
  className,
  style,
}) {
  if (loading)
    return (
      <button
        type="button"
        className={className}
    
      >
         
      <i className="fas fa-circle-notch fa-spin"></i> 

      </button>
    );

  return (
    <button type="submit" className={className} onClick={onClick}  style={style}>
      {children}
    </button>
  );
}
