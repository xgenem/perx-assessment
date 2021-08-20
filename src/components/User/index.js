import React from "react";
import { useSelector } from "react-redux";
import HeaderUser from "../Header/headerUser";

export default function User() {
  const user = useSelector((state) => state.results.selected);

  return (
    <>
      <HeaderUser title={user} />
      <div style={{ marginTop: 100 }}>
        <h1 style={{ color: "#000" }}>User</h1>
      </div>
    </>
  );
}
