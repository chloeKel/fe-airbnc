import { useUserContext } from "../../Contexts/Contexts";
import DefaultContent from "../DefaultContent";
import ToggleFavourite from "./ToggleFavourite";
import { FavouritesList, FavouriteCard, FavouritesText, ImageContainer } from "../../Styling/FavouritesStyle";
import { useFetchFavourites } from "../../CustomHooks/useFavesRequests";
import Loader from "../Loader";
import { StyledLink } from "../../Styling/NavigationStyles";
import { StyledFaveButtonContainer } from "../../Styling/ButtonStyles";
import useScreenSize from "../../CustomHooks/useScreenSize";

export default function ViewFavourites() {
  const { userId } = useUserContext();
  const { isLoading, favourites } = useFetchFavourites(userId);
  const screenSize = useScreenSize();
  const height = screenSize.height / 2.5;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {favourites.length > 0 ? (
            <FavouritesList>
              {favourites.map((property) => {
                const { property_id, name, location, price_per_night, favourited, favourite_id, image, alt_tag } = property;
                return (
                  <FavouriteCard key={`${property_id}`} $height={`${height}px`}>
                    <StyledLink to={`/property/${property_id}`}>
                      <span>{name}</span>
                    </StyledLink>
                    <ImageContainer>
                      <img src={image} alt={alt_tag} />
                      <StyledFaveButtonContainer>
                        <ToggleFavourite favourited={favourited} propertyId={property_id} favouriteId={favourite_id} />
                      </StyledFaveButtonContainer>
                    </ImageContainer>
                    <FavouritesText>
                      <p>{location}</p>
                      <p> £{price_per_night} per night</p>
                    </FavouritesText>
                  </FavouriteCard>
                );
              })}
            </FavouritesList>
          ) : (
            <DefaultContent component="favourites" />
          )}
        </>
      )}
    </>
  );
}
