import { useCardInfo } from "../Context/CardProvider";
import { v4 as uuidv4 } from "uuid";

const useKeyUpdate = () => {
  const { dispatch } = useCardInfo();
  const handleKeyUpdate = () => {
    dispatch({
      type: "SET_KEY",
      payload: {
        key: "key",
        value: uuidv4(),
      },
    });
  };
  return { handleKeyUpdate };
};
export default useKeyUpdate;
