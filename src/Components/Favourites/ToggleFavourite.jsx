import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../Contexts/Contexts";
import { FavouriteButton } from "../../Styling/StyledPropertyCard";
import { postFavourite, deleteFavourite } from "../../Utils/api";

export default function ToggleFavourite({ favourited, propertyId, favouriteId }) {
  const { id: userId } = useContext(UserContext);
  const [asset, setAsset] = useState("assets/blackHeart.svg");

  const handleClick = async () => {
    if (favourited) {
      await deleteFavourite(favouriteId);
      setAsset("assets/blackHeart.svg");
    } else {
      await postFavourite(propertyId, userId);
      setAsset("assets/redPinkHeart.svg");
    }
  };

  return <FavouriteButton $asset={asset} onClick={handleClick} />;
}
