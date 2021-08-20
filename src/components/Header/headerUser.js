import React from "react";
import Logo from "../Logo";

export default function HeaderUser({ title }) {
  return (
    <div className="header">
      <section>
        <>
          <Logo />
          <h1>{title}</h1>
        </>
      </section>
    </div>
  );
}
