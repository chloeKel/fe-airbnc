import { useState } from "react";
import { useUserContext, useErrorContext } from "../../Contexts/Contexts";
import useFavesRequests from "../../CustomHooks/useFavesRequests";
import { FavouriteButton } from "../../Styling/CarouselStyle";

export default function ToggleFavourite({ favourited, propertyId, favouriteId }) {
  const { userId } = useUserContext();
  const { setError } = useErrorContext();
  const { postFavourite, deleteFavourite } = useFavesRequests();
  const [favourite, setFavourite] = useState(favourited);

  const asset = favourite ? "/assets/redHeart.svg" : "/assets/whiteHeart.svg";

  const handleClick = async (favourite) => {
    setFavourite((prevState) => !prevState);

    try {
      if (favourite) {
        await deleteFavourite(favouriteId);
      } else {
        await postFavourite(propertyId, userId);
      }
    } catch (error) {
      setFavourite((prevState) => !prevState);
      setError(error);
    }
  };

  return <FavouriteButton $asset={asset} onClick={() => handleClick(favourite)} />;
}
