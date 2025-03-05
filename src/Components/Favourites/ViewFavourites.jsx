import { useState, useEffect } from "react";
import PropertyCards from "../ExplorePage/PropertyCards";
import DefaultContent from "../DefaultContent";
import useProperties from "../../CustomHooks/useProperties";

export default function ViewFavourites() {
  const { favourites } = useProperties();

  return <>{favourites.length > 0 ? <PropertyCards properties={favourites} /> : <DefaultContent component="favourites" />}</>;
}
