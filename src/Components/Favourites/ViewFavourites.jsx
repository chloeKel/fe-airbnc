import { useContext } from "react";
import { UserContext } from "../../Contexts/Contexts";
import DefaultContent from "../DefaultContent";
import FavouriteCards from "./FavouriteCards";
import useRefinedProps from "../../CustomHooks/useRefinedProps";

export default function ViewFavourites() {
  const { userId } = useContext(UserContext);
  const { refinedProps } = useRefinedProps(userId);

  return <>{refinedProps.length > 0 ? <FavouriteCards favourites={refinedProps} /> : <DefaultContent component="favourites" />}</>;
}
