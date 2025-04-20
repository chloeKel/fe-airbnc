import { useState, useEffect, useMemo, useCallback } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { ErrorContext, UserContext, ModalContext, useModalContext } from "./Contexts";
import { PopUpOverlay, PopUpContent } from "../Styling/PopUpStyle";
import { useFetchUser } from "../CustomHooks/useFetchUser";
import setErrorMsg from "../Utils/setErrorMsg";
import Loader from "../Components/Loader";

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(8);
  const { user } = useFetchUser(userId);

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
  const [modalContent, setModalContent] = useState(<Loader />);

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

  useEffect(() => {
    if (error) {
      openModal(
        <>
          <p>{setErrorMsg(error.status)}</p>
        </>
      );
      setTimeout(() => {
        setError(null);
        closeModal();
      }, 2500);
    }
  }, [error, openModal, closeModal, navigate]);

  const contextValue = useMemo(
    () => ({
      error,
      setError,
    }),
    [error]
  );

  return <ErrorContext.Provider value={contextValue}>{children}</ErrorContext.Provider>;
};
