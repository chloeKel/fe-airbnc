import { Link } from "react-router-dom";
import { FavouritesList, FavouriteCard, FavouritesText, FavouritesImage } from "../../Styling/StyledFavouritesCards";
import ToggleFavourite from "./ToggleFavourite";

export default function FavouriteCards({ favourites }) {
  return (
    <FavouritesList>
      {favourites.map((property, index) => {
        const { property_id, property_name, location, price_per_night, images, favourited, favourite_id } = property;
        return (
          <FavouriteCard key={`${property_id}-${index}`}>
            <FavouritesText>
              <p>{property_name}</p>
              <p>
                {location}, £{price_per_night} per night
              </p>
              <ToggleFavourite favouritedStatus={favourited} propertyId={property_id} favouriteId={favourite_id} />
            </FavouritesText>
            <Link to={`property/${property_id}`}>
              <FavouritesImage>
                <img src={images[0]} alt={property_name} />
              </FavouritesImage>
            </Link>
          </FavouriteCard>
        );
      })}
    </FavouritesList>
  );
}
