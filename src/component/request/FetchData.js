import { useEffect, useState } from "react";

function useFetch(url) {
  const initialState = {
    data: [],
    isLoading: true,
    isError: null,
  };
  const [result, setResult] = useState(initialState);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((newRes) =>
        setResult((prev) => ({
          ...prev,
          data: newRes,
          isLoading: false,
          isError: null,
        }))
      )
      .catch((err) =>
        setResult((prev) => ({
          ...prev,
          data: [],
          isLoading: false,
          isError: err,
        }))
      );
  }, [url]);

  return result;
}

export default useFetch;
