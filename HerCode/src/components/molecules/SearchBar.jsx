import React from "react";
import SearchIcon from "./SearchIcon";

export default function SearchBar({
  value = "",
  onChange,
  onSearch,
  placeholder = "Search...",
  className = "search-box",
}) {
  const handleChange = (event) => {
    const newValue = event.target.value;

    if (onChange) {
      onChange(newValue);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && onSearch) {
      onSearch(value);
    }
  };

  return (
    <div className={className}>
      <SearchIcon />

      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}