import { useEffect, useState } from "react";
import axios from "axios";
function useFetch(search) {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        `https://hn.algolia.com/api/v1/search?query=${search}`
      );
      console.log(result.data);
      setData(result.data);
    }
    fetchData();
  }, [search]);

  return [data];
}

export default useFetch;
