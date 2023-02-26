import { useContext } from 'react';
import { IModalContext, ModalContext } from './ModalProvider';

export default function useModalContext(): IModalContext {
  return useContext(ModalContext);
}