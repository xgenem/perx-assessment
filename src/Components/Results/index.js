import React from "react";
import ResultItem from "./item";

export default function Results({ results }) {
  return (
    <>
      {results.map((item) => {
        return <ResultItem item={item} />;
      })}
    </>
  );
}
