import { useState, useEffect } from "react";
import PropertyCards from "../ExplorePage/PropertyCards";
import DefaultContent from "../DefaultContent";
import useProperties from "../../CustomHooks/useProperties";
import FavouriteCards from "./FavouriteCards";

export default function ViewFavourites() {
  const { favourites } = useProperties();

  return <>{favourites.length > 0 ? <FavouriteCards favourites={favourites} /> : <DefaultContent component="favourites" />}</>;
}
