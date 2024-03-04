import { useCardInfo } from "../Context/CardProvider";
import { ChangeEvent } from "react";

const useSecurityCode = () => {
  const { state, dispatch } = useCardInfo();

  const handleCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "SET_SECURITY_CODE",
      payload: { key: "securityCode", value: event.target.value },
    });
  };

  return {
    securityCode: state.securityCode,
    handleCodeChange,
  };
};

export default useSecurityCode;
