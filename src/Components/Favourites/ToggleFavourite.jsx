import { useState, useContext, useOptimistic, startTransition } from "react";
import { UserContext, ErrorContext } from "../../Contexts/Contexts";
import setErrorMsg from "../../Utils/setErrorMsg";
import { FavouriteButton } from "../../Styling/StyledPropertyCard";
import { postFavourite, deleteFavourite } from "../../Utils/api";

export default function ToggleFavourite({ favouritedStatus, propertyId, favouriteId }) {
  const { id: userId } = useContext(UserContext);
  const { setError } = useContext(ErrorContext);
  const [favourited, setFavourited] = useState(favouritedStatus);

  const [optimisticFavourite, setOptimisticFavourite] = useOptimistic(favourited, (currentStatus) => !currentStatus);

  const asset = optimisticFavourite ? "assets/redPinkHeart.svg" : "assets/blackHeart.svg";

  const handleClick = async () => {
    startTransition(() => {
      setOptimisticFavourite();
    });

    try {
      if (favourited) {
        await deleteFavourite(favouriteId);
        setFavourited(false);
      } else {
        await postFavourite(propertyId, userId);
        setFavourited(true);
      }
    } catch (error) {
      setError(setErrorMsg(error.response));
      setOptimisticFavourite();
    }
  };

  return <FavouriteButton $asset={asset} onClick={handleClick} />;
}
