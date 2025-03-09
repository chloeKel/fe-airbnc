import { useUserContext } from "../../Contexts/Contexts";
import DefaultContent from "../DefaultContent";
import FavouriteCards from "./FavouriteCards";
import useRefinedProps from "../../CustomHooks/useRefinedProps";

export default function ViewFavourites() {
  const { userId } = useUserContext();
  const { refinedProps } = useRefinedProps(userId);

  return <>{refinedProps.length > 0 ? <FavouriteCards favourites={refinedProps} /> : <DefaultContent component="favourites" />}</>;
}
