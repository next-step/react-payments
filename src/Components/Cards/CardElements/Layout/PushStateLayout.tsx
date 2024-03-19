import { ReactNode, useEffect } from "react";
import useKeyUpdate from "../../../../Hooks/useKeyUpdate";
import useDateUpdate from "../../../../Hooks/useDateUpdate";

const KeyCreatedAtLayout = ({ children }: { children: ReactNode }) => {
  const { handleDateUpdate } = useDateUpdate();
  const { handleKeyUpdate } = useKeyUpdate();

  useEffect(() => {
    handleDateUpdate();
    handleKeyUpdate();
  }, []);

  return <>{children}</>;
};
export default KeyCreatedAtLayout;
