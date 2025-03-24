import { useState, useEffect, useMemo, useCallback } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { ErrorContext, UserContext, ModalContext, useModalContext, MenuContext } from "./Contexts";
import { PopUpOverlay, PopUpContent } from "../Styling/PopUpStyle";
import useFetchUser from "../CustomHooks/useFetchUser";
import setErrorMsg from "../Utils/setErrorMsg";
import { StyledButton } from "../Styling/ButtonStyles";
import { StyledMenuButton } from "../Styling/ButtonStyles";
import Menu from "../Components/ExplorePage/Menu";

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(8);
  const user = useFetchUser(userId);

  const contextValue = useMemo(
    () => ({
      user,
      userId,
      setUserId,
    }),
    [user, userId]
  );

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export const ModalProvider = ({ children }) => {
  const modalRoot = document.getElementById("modal-root");
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(<div>Loading...</div>);

  const openModal = useCallback(
    (content) => {
      setShowModal(true);
      setModalContent(content);
    },
    [setModalContent, setShowModal]
  );

  const closeModal = useCallback(() => {
    setShowModal(false);
    setModalContent(null);
  }, [setModalContent, setShowModal]);

  return (
    <ModalContext.Provider value={{ closeModal, openModal }}>
      {children}
      {showModal &&
        createPortal(
          <PopUpOverlay>
            <PopUpContent>{modalContent}</PopUpContent>
          </PopUpOverlay>,
          modalRoot
        )}
    </ModalContext.Provider>
  );
};

export const ErrorProvider = ({ children }) => {
  const navigate = useNavigate();
  const { openModal, closeModal } = useModalContext();
  const [error, setError] = useState(null);
  const [redirect, setRedirect] = useState(true);

  useEffect(() => {
    if (error) {
      openModal(
        <>
          <p>{setErrorMsg(error.status)}</p>
          <StyledButton
            onClick={() => {
              setError(null);
              if (redirect) navigate(-1);
              closeModal();
            }}
          >
            {redirect ? "Explore" : "Back"}
          </StyledButton>
        </>
      );
    }
  }, [error, openModal, closeModal, navigate, redirect]);

  const contextValue = useMemo(
    () => ({
      error,
      setError,
      setRedirect,
    }),
    [error]
  );

  return <ErrorContext.Provider value={contextValue}>{children}</ErrorContext.Provider>;
};

export const MenuProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const asset = showMenu ? "/assets/close.svg" : "/assets/menu.svg";

  const toggleMenu = () => setShowMenu((prevState) => !prevState);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMenu]);

  return (
    <MenuContext.Provider value={{ toggleMenu }}>
      {children}
      <StyledMenuButton $asset={asset} onClick={toggleMenu} />
      {showMenu && createPortal(<Menu />, document.body)}
    </MenuContext.Provider>
  );
};
