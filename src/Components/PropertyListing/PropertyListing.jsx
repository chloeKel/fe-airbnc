import { useParams } from "react-router-dom";
import { useState } from "react";
import PropertyDetails from "./PropertyDetails";
import Profile from "../Profile";
import useSingleProperty from "../../CustomHooks/useSingleProperty";

export default function PropertyListing() {
  const { id } = useParams();
  const { property, hostId } = useSingleProperty(id);

  const [activeTab, setActiveTab] = useState("property");

  return (
    <>
      <button onClick={() => setActiveTab("property")}>Property</button>
      <button onClick={() => setActiveTab("host")}>Host</button>
      {activeTab === "property" ? <PropertyDetails property={property} id={id} /> : <Profile id={hostId} />}
    </>
  );
}
