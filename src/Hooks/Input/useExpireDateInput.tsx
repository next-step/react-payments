import { useCardInfo } from "../../Context/CardProvider";
import { Validation } from "../../Util/Validation";
import useValidationInput from "./useValidationInput ";
import { expiryDate } from "../../type/CardInfoType";

export const useExpireDateInput = (dateKey: keyof expiryDate) => {
  const { state, dispatch } = useCardInfo();
  const input = useValidationInput(
    state.expiryDate[dateKey],
    (ExpireDate) => {
      dispatch({
        type: "SET_EXPIRE_DATE",
        payload: { key: dateKey, value: ExpireDate },
      });
    },
    dateKey === "MM"
      ? Validation.ExpireDate.monthCheck
      : Validation.ExpireDate.dayCheck
  );

  return input;
};

export default useExpireDateInput;
