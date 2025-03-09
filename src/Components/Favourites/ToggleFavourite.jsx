import { useState } from "react";
import { useUserContext, useErrorContext } from "../../Contexts/Contexts";
import { FavouriteButton } from "../../Styling/StyledPropertyCard";
import { useFavesRequests } from "../../CustomHooks/useFavesRequests";

export default function ToggleFavourite({ favouritedStatus, propertyId, favouriteId }) {
  const { userId } = useUserContext();
  const { setError } = useErrorContext();
  const { postFavourite, deleteFavourite } = useFavesRequests();
  const [favourited, setFavourited] = useState(favouritedStatus);

  const asset = favourited ? "assets/highContrastPinkHeart.svg" : "assets/blackHeart.svg";

  const handleClick = async (favourited) => {
    setFavourited((prevState) => !prevState);

    try {
      if (favourited) {
        await deleteFavourite(favouriteId);
      } else {
        await postFavourite(propertyId, userId);
      }
    } catch (error) {
      setFavourited((prevState) => !prevState);
      setError(error);
    }
  };

  return <FavouriteButton $asset={asset} onClick={() => handleClick(favourited)} />;
}
