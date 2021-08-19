import React from "react";
import Logo from "../Logo";

export default function Header({ title, subtitle, onSearch, onTextChange }) {
  return (
    <div className="header">
      <section>
        <>
          <Logo />
          <div>&nbsp;&nbsp;&nbsp;</div>
          <div className="action-container search-container">
            <i className="fa fa-search" />
            <input
              className="search-input"
              title="Search"
              placeholder="Github username"
              onChange={onTextChange}
            />
          </div>
          <button className="search-button" onSubmit={onSearch}>
            Find
          </button>
        </>
      </section>
      {/* <h1>
        {title} - <span>{subtitle}</span>
      </h1> */}
    </div>
  );
}
