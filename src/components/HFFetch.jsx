import React, { useState } from "react";
import useFetch from "./hooks/useFetch";

function HFFetch() {
  const [search, setSearch] = useState("linux");
  const [data] = useFetch(search);
  return (
    <div>
      <div>
        <input
          type="text"
          name="search"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </div>
      <ul>
        {data.hits.map((item) => (
          <li key={item.objectID}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default HFFetch;
