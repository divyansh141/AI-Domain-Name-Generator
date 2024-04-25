import React from "react";

export default function Results({ domainName, availability }) {
  return (
    <>
      <div className="results__item">
        <p>{domainName}</p>
        <p>{availability}</p>
        <button>Buy</button>
      </div>
    </>
  );
}
