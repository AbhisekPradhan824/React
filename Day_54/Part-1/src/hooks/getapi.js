import { useEffect, useState } from "react";

export function useApi(url) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((responseData) => {
        setData(responseData);
      });
  }, [url]);
  return data;
}
