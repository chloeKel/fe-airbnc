import { Link } from "react-router-dom";
import { useUserContext } from "../../Contexts/Contexts";
import DefaultContent from "../DefaultContent";
import ToggleFavourite from "./ToggleFavourite";
import { FavouritesList, FavouriteCard, FavouritesText, FavouritesImage } from "../../Styling/StyledFavouritesCards";
import { useFetchFavourites } from "../../CustomHooks/useFavesRequests";

export default function ViewFavourites() {
  const { userId } = useUserContext();
  const favourites = useFetchFavourites(userId);

  return (
    <>
      {favourites.length > 0 ? (
        <FavouritesList>
          {favourites.map((property) => {
            const { property_id, name, location, price_per_night, favourited, favourite_id, image, alt_tag } = property;
            return (
              <FavouriteCard key={`${property_id}`}>
                <FavouritesText>
                  <p>
                    {name}, {location}, £{price_per_night} per night
                  </p>
                  <ToggleFavourite favourited={favourited} propertyId={property_id} favouriteId={favourite_id} />
                </FavouritesText>
                <Link to={`property/${property_id}`}>
                  <FavouritesImage>
                    <img src={image} alt={alt_tag} />
                  </FavouritesImage>
                </Link>
              </FavouriteCard>
            );
          })}
        </FavouritesList>
      ) : (
        <DefaultContent component="favourites" />
      )}
    </>
  );
}
