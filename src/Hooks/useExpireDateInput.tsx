import { useCardInfo } from "../Context/CardProvider";
import { Validaton } from "../Util/Validation";
import useValidationInput from "./Input/useValidationInput ";

export const useExpireDateInput = (dateKey: "MM" | "YY") => {
  const { state, dispatch } = useCardInfo();
  const input = useValidationInput(
    state.expiryDate[dateKey],
    (ExpireDate) => {
      dispatch({
        type: "SET_EXPIRE_DATE",
        payload: { key: dateKey, value: ExpireDate },
      });
    },
    Validaton.ExpireDateVal
  );

  return input;
};

export default useExpireDateInput;
