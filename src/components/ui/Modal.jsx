import { cloneElement, useContext, useState, createContext } from "react";

// 1- Create Context
const ModalContext = createContext();

// 2- Context Component
function Modal({ children }) {
  const [isOpenName, setIsOpenName] = useState(false);
  const openModalFun = (modalNameArgu) => {
    setIsOpenName(modalNameArgu);
  };
  const closeModalFun = () => {
    setIsOpenName("");
  };
  return (
    <ModalContext.Provider value={{ isOpenName, openModalFun, closeModalFun }}>
      {children}
    </ModalContext.Provider>
  );
}

// 3 - Chidern Open
function ModalOpen({ children, modalName }) {
  const { openModalFun } = useContext(ModalContext);

  return cloneElement(children, {
    onClickModalButton: () => openModalFun(modalName),
  });
}

// 3 - Chidern Window
function ModalWindow({ children, modalName }) {
  const { isOpenName, closeModalFun } = useContext(ModalContext);

  if (modalName !== isOpenName) return null;

  return cloneElement(children, {
    onCloseModal: closeModalFun,
  });
}

// 5 - Export Compound component
Modal.ModalOpen = ModalOpen;
Modal.ModalWindow = ModalWindow;
export default Modal;
