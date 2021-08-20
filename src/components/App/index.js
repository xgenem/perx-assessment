import React, { useState, useCallback } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import debounce from "lodash.debounce";
import { searchUser } from "../../api/search";
import Header from "../Header";
import Results from "../Results";
import User from "../User";

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
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/user">
              <User />
            </Route>
            <Route path="/">
              <Header
                title="Findhub"
                subtitle="find someone on Github"
                onTextChange={onTextChange}
              />
              <Results results={results?.items || []} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}
