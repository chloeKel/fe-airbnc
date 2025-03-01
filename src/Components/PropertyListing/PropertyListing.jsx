import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchSingleProperty } from "../../api";
import PropertyDetails from "./PropertyDetails";
import Profile from "../Profile";

export default function PropertyListing() {
  const { id } = useParams();
  const [property, setProperty] = useState({});
  const [hostId, setHostId] = useState(null);
  const [activeTab, setActiveTab] = useState("property");

  useEffect(() => {
    (async () => {
      const { property } = await fetchSingleProperty(id);
      setProperty(property);
      setHostId(property.host_id);
    })();
  }, [id]);

  return (
    <>
      <button onClick={() => setActiveTab("property")}>Property</button>
      <button onClick={() => setActiveTab("host")}>Host</button>
      {activeTab === "property" ? <PropertyDetails property={property} id={id} /> : <Profile userId={hostId} />}
    </>
  );
}
