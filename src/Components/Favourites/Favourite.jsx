import { useState, useEffect, useContext } from "react";
import { FavouriteButton } from "../../Styling/StyledPropertyCard";

export default function Favourite({ favourited }) {
  const [asset, setAsset] = useState("assets/blackHeart.svg");

  useEffect(() => {
    if (favourited) setAsset("assets/redPinkHeart.svg");
  }, [favourited]);

  return <FavouriteButton $asset={asset} />;
}
