import { useCallback } from "react";
import useModal from "../../../../hooks/useModal";
import { Button } from "../../../../../../components";

export default function useCardSecurityTooltip() {
  const { showModal, closeModal } = useModal(() => (
    <div className="flex-column-center">
      <p>보안코드는 3자리 숫자로 입력해주세요.</p>
      <Button onClick={closeModal}>확인</Button>
    </div>
  ));

  const handleClickTooltip = useCallback(() => showModal(), [showModal]);

  return { handleClickTooltip };
}
