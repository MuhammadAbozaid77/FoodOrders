import Modal from "../../../components/ui/Modal";
import CheckOut from "./CheckOut";
import ModalButton from "../../../components/ui/ModalButton";

export default function CartModal() {
  return (
    <>
      <Modal>
        <Modal.ModalOpen modalName={"CheckOutCart"}>
          <ModalButton text={"Check Orders"} />
        </Modal.ModalOpen>
        <Modal.ModalWindow modalName={"CheckOutCart"}>
          <CheckOut />
        </Modal.ModalWindow>
      </Modal>
    </>
  );
}
