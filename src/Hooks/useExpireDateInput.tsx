import { useCardInfo } from "../Context/CardProvider";
import UseInput from "./useInput";

export const useExpireDateInput = (dateKey: "MM" | "YY") => {
  const { state, dispatch } = useCardInfo();

  const input = UseInput(
    state.expiryDate[dateKey],
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: "SET_EXPIRE_DATE",
        payload: { key: dateKey, value: event.target.value },
      });
    }
  );

  return input;
};

export default useExpireDateInput;
