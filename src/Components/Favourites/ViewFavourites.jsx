import { useUserContext } from "../../Contexts/Contexts";
import useFetchProps from "../../CustomHooks/useFetchProps";

import DefaultContent from "../DefaultContent";
import FavouriteCards from "./FavouriteCards";

export default function ViewFavourites() {
  const { userId } = useUserContext();
  const properties = useFetchProps(userId);

  return <>{properties.length > 0 ? <FavouriteCards favourites={properties} /> : <DefaultContent component="favourites" />}</>;
}
