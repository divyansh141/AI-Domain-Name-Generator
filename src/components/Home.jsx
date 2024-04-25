import { useEffect, useState } from "react";
import Results from "./Results";
import { tldList } from "../utils/constants";
export default function Home() {
  const [searchedText, setSearchedText] = useState("");
  const [resultLimit, setResultLimit] = useState(10);
  const [tlds, setTlds] = useState(["com"]);
  const [results, setResults] = useState([]);

  const getDomains = () => {
    if (searchedText !== "") {
      fetch(
        `https://sugapi.verisign-grs.com/ns-api/2.0/suggest?name=${searchedText}&tlds=${tlds.toString()}&lang=eng&use-numbers=true&use-idns=auto&use-dashes=true&sensitive-content-filter=false&include-registered=false&max-length=63&max-results=${resultLimit}&include-suggestion-type=true`
      )
        .then((res) => res.json())
        .then((data) => setResults(data.results));
    }
  };
  useEffect(() => {
    const timerId = setTimeout(() => {
      getDomains();
    }, 800);
    return () => clearTimeout(timerId);
  }, [searchedText, tlds, resultLimit]);

  useEffect(() => setResultLimit(10), []);
  return (
    <>
      <div className="hero">
        <h1>NameButler</h1>
        <input
          type="text"
          value={searchedText}
          placeholder="Type your keywords here..."
          onChange={(e) => setSearchedText(e.target.value)}
          className="domain_search"
        />
        <div className="tlds">
          {tldList.map((item, index) => (
            <div
              key={index}
              className={`tlds__single ${
                tlds.includes(item) && "tlds__selected"
              }`}
              onClick={() => {
                if (tlds.includes(item)) {
                  setTlds(tlds.filter((tld) => tld !== item));
                } else {
                  setTlds([...tlds, item]);
                }
              }}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="results">
          {results.length > 0 && searchedText !== "" ? (
            results.map((item) => (
              <Results
                key={item.name}
                domainName={item.name}
                availability={item.availability}
              />
            ))
          ) : (
            <div></div>
          )}
        </div>
        {results.length > 0 && searchedText !== "" ? (
          <button
            onClick={() => setResultLimit((e) => e + 10)}
            className="loadmore"
          >
            Load More
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}
