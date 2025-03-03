import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { ErrorContext } from "../../Contexts/Contexts";
import { setErrorMsg } from "../../Utils/setErrorMsg";
import { fetchSingleProperty } from "../../Utils/api";
import PropertyDetails from "./PropertyDetails";
import Profile from "../Profile";

export default function PropertyListing() {
  const { setError } = useContext(ErrorContext);
  const { id } = useParams();
  const [property, setProperty] = useState({});
  const [hostId, setHostId] = useState(null);
  const [activeTab, setActiveTab] = useState("property");

  useEffect(() => {
    (async () => {
      try {
        const { property } = await fetchSingleProperty(id);
        setProperty(property);
        setHostId(property.host_id);
      } catch (error) {
        setError(setErrorMsg(error.response));
      }
    })();
  }, [id]);

  return (
    <>
      <button onClick={() => setActiveTab("property")}>Property</button>
      <button onClick={() => setActiveTab("host")}>Host</button>
      {activeTab === "property" ? <PropertyDetails property={property} id={id} /> : <Profile hostId={hostId} />}
    </>
  );
}
