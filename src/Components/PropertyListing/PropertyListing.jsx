import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useFetchProp from "../../CustomHooks/useFetchProp";
import PropertyDetails from "./PropertyDetails";
import Profile from "../Profile";

export default function PropertyListing() {
  const { id: propertyId } = useParams();
  const { fetchProp } = useFetchProp();
  const [property, setProperty] = useState({});
  const [activeTab, setActiveTab] = useState("property");

  useEffect(() => {
    (async () => {
      const prop = await fetchProp(propertyId);
      setProperty(prop);
    })();
  }, [fetchProp, propertyId]);

  return (
    <>
      <button onClick={() => setActiveTab("property")}>Property</button>
      <button onClick={() => setActiveTab("host")}>Host</button>
      {activeTab === "property" ? <PropertyDetails property={property} /> : <Profile hostId={property.host_id} />}
    </>
  );
}
