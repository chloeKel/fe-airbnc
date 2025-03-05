import { useState, useEffect, useContext } from "react";
import { UserContext, ErrorContext } from "../../Contexts/Contexts";
import { setErrorMsg } from "../../Utils/setErrorMsg";
import { FavouriteButton } from "../../Styling/StyledPropertyCard";
import { fetchSingleProperty, postFavourite } from "../../Utils/api";

export default function FavouriteStatus({ favourited }) {
  // const { id } = useContext(UserContext);
  // const { setError } = useContext(ErrorContext);
  // const [isFavourite, setIsFavourite] = useState(favourited);

  // const addFavourite = async (id) => {
  //   try {
  //     await postFavourite(propertyId, id);
  //   } catch (error) {
  //     setError(setErrorMsg(error.response));
  //   }
  // };

  // onClick={() => addFavourite(propertyId, id)}

  return <FavouriteButton />;
}
