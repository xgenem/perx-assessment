import React, { useState, useCallback } from "react";
import debounce from "lodash.debounce";
import { searchUser } from "../../api/search";
import Header from "../Header";
import Results from "../Results";

export default function App() {
  const [results, setResults] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce((nextQuery) => {
      searchUser(nextQuery).then((results) => {
        setResults(results);
      });
    }, 1000)
  );

  const onTextChange = (event) => {
    debouncedSearch(event.target.value);
  };

  return (
    <>
      <Header
        title="Findhub"
        subtitle="find someone on Github"
        onTextChange={onTextChange}
      />
      <div>
        <Results results={results?.items || []} />
      </div>
    </>
  );
}
