import React from "react";

export default function Header({ title, subtitle }) {
  return (
    <div className="header">
      <section>
        <div className="action-container search-container">
          <i className="fa fa-search" />
          <input
            className="search-input"
            title="Search"
            placeholder="Github username"
          />
        </div>
        <button className="search-button">Find</button>
      </section>
      {/* <h1>
        {title} - <span>{subtitle}</span>
      </h1> */}
    </div>
  );
}
