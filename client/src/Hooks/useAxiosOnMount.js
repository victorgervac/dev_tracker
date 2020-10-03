import React, { useState, useEffect } from "react";
import axios from "axios";

export const useAxiosOnMount = (url, options = { method: "get" }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const refetch = async (url, options) => {
    setLoading(true);
    try {
      const res = await axios({
        url,
        ...options,
      });
      setResponse(res);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    refetch();
  }, []);
  return { data: response.data ? response.data : [], response, loading, error };
};
