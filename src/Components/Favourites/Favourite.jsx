import { useState, useEffect, useContext } from "react";
import { FavouriteButton } from "../../Styling/StyledPropertyCard";
import { useFavouriteButton } from "../../CustomHooks/useFavourites";
import { ErrorContext, UserContext } from "../../Contexts/Contexts";
import { setErrorMsg } from "../../Utils/setErrorMsg";

export default function Favourite({ propertyId, favouriteId, favourited }) {
  const { id } = useContext(UserContext);
  const { setError } = useContext(ErrorContext);
  const { addFavourite, removeFavourite } = useFavouriteButton();
  const [asset, setAsset] = useState("assets/blackHeart.svg");

  useEffect(() => {
    if (favourited) setAsset("assets/redPinkHeart.svg");
  }, [favourited]);

  const handleClick = async () => {
    try {
      if (!favourited) {
        addFavourite(propertyId, id);
      } else {
        removeFavourite(favouriteId);
      }
    } catch (error) {
      setError(setErrorMsg(error.response));
    }
  };

  return <FavouriteButton $asset={asset} onClick={handleClick} />;
}
