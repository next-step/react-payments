import { useCardInfo } from "../../Context/CardProvider";
import { ChangeEvent } from "react";
import { Validation } from "../../Util/Validation";

const useSecurityCode = () => {
  const { state, dispatch } = useCardInfo();

  const handleCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (
      Validation.CvcCcv.NumberCheck(event.target.value) &&
      Validation.CvcCcv.lengthCheck(event.target.value)
    ) {
      dispatch({
        type: "SET_SECURITY_CODE",
        payload: { key: "securityCode", value: event.target.value },
      });
    }
  };

  return {
    securityCode: state.securityCode,
    handleCodeChange,
  };
};

export default useSecurityCode;
