import { useState } from "react";
import { useUserContext, useErrorContext } from "../../Contexts/Contexts";
import { useFavesRequests } from "../../CustomHooks/useFavesRequests";
import { StyledFavouriteButton } from "../../Styling/ButtonStyles";

export default function ToggleFavourite({ favourited, propertyId, favouriteId, unfavouriteAsset }) {
  const { userId } = useUserContext();
  const { setError } = useErrorContext();
  const { postFavourite, deleteFavourite } = useFavesRequests();
  const [favouriteAsset, setFavouriteAsset] = useState(favourited);
  const [favourite, setFavourite] = useState(favourited);
  const [pendingFave, setPendingFave] = useState({});

  const asset = favouriteAsset ? "/assets/favouriteHeart.svg" : unfavouriteAsset;

  const handleClick = async (favourite) => {
    setFavouriteAsset((prevState) => !prevState);

    try {
      if (favourite) {
        if (String(propertyId) === pendingFave.property_id) {
          await deleteFavourite(pendingFave.favourite_id);
          setFavourite(false);
        } else {
          await deleteFavourite(favouriteId);
          setFavourite(false);
        }
      } else {
        const response = await postFavourite(propertyId, userId);
        setPendingFave(response);
        setFavourite(true);
      }
    } catch (error) {
      setFavourite((prevState) => !prevState);
      setError(error);
    }
  };

  return <StyledFavouriteButton $asset={asset} onClick={() => handleClick(favourite)} />;
}
