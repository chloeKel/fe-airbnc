import { useState, useEffect, useContext } from "react";
import { ErrorContext } from "../../Contexts/Contexts";
import { setErrorMsg } from "../../Utils/setErrorMsg";
import { fetchProperties } from "../../Utils/api";
import SortAndFilter from "../SortAndFilter/SortAndFilter";
import PropertyCards from "./PropertyCards";

export default function ViewProperties() {
  const { setError } = useContext(ErrorContext);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { properties } = await fetchProperties();
        setProperties(properties);
      } catch (error) {
        setError(setErrorMsg(error.response));
      }
    })();
  }, []);

  return (
    <>
      <SortAndFilter />
      <PropertyCards properties={properties} />
    </>
  );
}
