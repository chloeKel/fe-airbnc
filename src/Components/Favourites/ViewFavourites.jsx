import PropertyCards from "../ExplorePage/PropertyCards";
import DefaultContent from "../DefaultContent";
import useProperties from "../../CustomHooks/useProperties";

export default function ViewFavourites() {
  const { properties } = useProperties();

  const favourites = properties.filter(({ favourited }) => favourited);

  return <>{favourites.length > 0 ? <PropertyCards properties={favourites} /> : <DefaultContent component="favourites" />}</>;
}
