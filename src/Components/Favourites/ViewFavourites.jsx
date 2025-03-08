import { useContext } from "react";
import { UserContext } from "../../Contexts/Contexts";

import DefaultContent from "../DefaultContent";
import useProperties from "../../CustomHooks/useProperties";
import FavouriteCards from "./FavouriteCards";

export default function ViewFavourites() {
  const { switchUser } = useContext(UserContext);
  const id = switchUser("guest");
  const { favourites } = useProperties(id);

  return <>{favourites.length > 0 ? <FavouriteCards favourites={favourites} /> : <DefaultContent component="favourites" />}</>;
}
