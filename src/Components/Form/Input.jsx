import React from "react";

export default function Input({
  value,
  onChange,
  disabled,
  max,
  startIcon,
  endIcon,
  placeholder,
  type,
  className,
}) {
  return (
    <fieldset
      className={`form-group position-relative ${
        startIcon ? "has-icon-left" : ""
      }
       mb-0`}
    >
      <input
        type={type}
        className={className}
        id="basicInput"
        value={value}
        onChange={(e) => {
          if (max ? e.target.value.length <= max : true)
            onChange && onChange(e.target.value);
        }}
        disabled={disabled}
        placeholder={placeholder}
      />
      <button
        className="btn view-btn position-absolute"
        onClick={(e) => {
          e.preventDefault();
        }}
        style={{ boxShadow: "none", marginTop: -11 }}
      >
        {startIcon ? startIcon : null}
        {endIcon ? endIcon : null}
      </button>
    </fieldset>
  );
}
