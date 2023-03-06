import { useCallback } from "react";

const useCardSubmit = (disabled: boolean) => {
  const handleSubmit = useCallback(() => {
    if (disabled) return;
    alert("저장 완료");
  }, [disabled]);

  return handleSubmit;
};

export default useCardSubmit;
