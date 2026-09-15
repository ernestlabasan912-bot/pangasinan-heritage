import React from "react";

export default function TextInput({
  type = "text",
  value = "",
  onChange,
  placeholder = "",
  className = "search-input",
  ...rest
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(event) =>
        onChange?.(event.target.value)
      }
      placeholder={placeholder}
      className={className}
      {...rest}
    />
  );
}