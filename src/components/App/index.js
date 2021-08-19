import React, { useCallback } from "react";
import Header from "../Header";
import Results from "../Results";

const results = [
  {
    name: "Gene",
  },
  {
    name: "Jessica",
  },
];

export default function App() {
  const handleOnSearch = () => {
    console.log("testing");
  };
  return (
    <>
      <Header
        title="Findhub"
        subtitle="find someone on Github"
        onSearch={handleOnSearch}
      />
      <div>
        <Results results={results} />
      </div>
    </>
  );
}
