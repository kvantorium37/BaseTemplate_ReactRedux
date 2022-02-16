import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useSearchParams = () => {
  const location = useLocation();
  const { search } = location;
  useEffect(() => {
    // console.log(location, search);
  }, []);
  return search;
};
