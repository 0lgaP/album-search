import React, { Fragment, useState, useEffect } from "react";
import Axios from "axios";
import SearchBar from "components/SearchBar";
import Results from "components/Results";

export default function LiveSearch(props) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(()=>{
    const testUrl = `https://itunes.apple.com/search?term=${term}&country=CA&media=music&entity=album&attribute=artistTerm`
    Axios.get(testUrl)
    .then((response)=>{
      setResults([...response.data.results])
      //also works (responce.data.results)
      // [response] [[]]
      // [response] [1,2,3,]
    })
  }, [term]);
  return (
    <Fragment>
      <header className="logo">
        <img src="images/brand.png" alt="Brand" />
      </header>
      <main>
        <SearchBar onSearch={term => setTerm(term)} />
        <Results results={results} />
      </main>
    </Fragment>
  );
}
