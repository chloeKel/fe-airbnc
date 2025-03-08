import setErrorMsg from "../Utils/setErrorMsg";
import { PopUpOverlay, PopUpContent } from "../Styling/StyledPopUp";
import { Button } from "../Styling/StyledButton";

export default function ErrorPopUp({ error, redirect, handleCloseError }) {
  return (
    <>
      {error ? (
        <PopUpOverlay>
          <PopUpContent>
            <p>{setErrorMsg(error)}</p>
            <Button
              onClick={() => {
                handleCloseError();
              }}
            >
              {redirect ? "Explore" : "Back"}
            </Button>
          </PopUpContent>
        </PopUpOverlay>
      ) : null}
    </>
  );
}
