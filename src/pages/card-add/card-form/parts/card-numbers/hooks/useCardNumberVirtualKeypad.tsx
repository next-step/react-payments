import {
  FocusEventHandler,
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { useModal } from "../../../../hooks";
import { VirtualKeypad } from "../../../../../../components";

const MAX_SIZE = 4;
export default function useCardNumberVirtualKeypad(onInput: () => void) {
  const { showModal, closeModal } = useModal(() => (
    <VirtualKeypad onClick={handleClickKeypad} onDelete={handleDeleteKeypad} />
  ));

  const $currentRef = useRef<HTMLInputElement>();

  const handleFocus: FocusEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      $currentRef.current = event.target;
      showModal();
    },
    [showModal]
  );

  const closeIfMaxSize = useCallback(() => {
    if ($currentRef.current?.value.length === MAX_SIZE) {
      closeModal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [$currentRef.current, closeModal]);

  const handleDeleteKeypad = useCallback(() => {
    const $ref = $currentRef.current;
    if ($ref) {
      $ref.value = [...$ref.value].slice(0, -1).join("");
      onInput();
    }
  }, [onInput]);

  const handleClickKeypad = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const $ref = $currentRef.current;
      const { value: eventValue } = event.currentTarget;
      if ($ref) {
        $ref.value = ($ref.value + eventValue).substring(0, MAX_SIZE);
        onInput();
      }
      closeIfMaxSize();
    },
    [closeIfMaxSize, onInput]
  );

  useEffect(() => {
    const $ref = $currentRef.current;
    if (!$ref) {
      return;
    }

    $ref.addEventListener("input", closeIfMaxSize);
    return () => $ref.removeEventListener("input", closeIfMaxSize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [$currentRef.current]);

  return {
    handleFocus,
  };
}
