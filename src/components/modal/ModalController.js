import reactDom from "react-dom";
import { Modal } from "./Modal";
import { LoginModal } from "./LoginModal";
import { RegisterModal } from "./RegisterModal";
import { AddAssetModal } from "./AddAssetModal";
import { EditAssetModal } from "./EditAssetModal";

export const ModalController = ({ open, type, onClose, data }) => {
  if (!open) return null;
  let modal;
  if (type === "login") {
    modal = <LoginModal onClose={onClose} />;
  }
  if (type === "register") {
    modal = <RegisterModal onClose={onClose} />;
  }
  if (type === "add-asset") {
    modal = <AddAssetModal />;
  }
  if (type === "edit-asset") {
    modal = <EditAssetModal data={data} />;
  }
  return reactDom.createPortal(
    <>
      <div className="overlay"></div>
      <Modal onClose={onClose}>{modal}</Modal>
    </>,
    document.getElementById("modal-root")
  );
};
