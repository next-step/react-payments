import { useContext } from "react";
import { ModalContext } from "../ModalProvider";

export default function useModalContext() {
  return useContext(ModalContext);
}
