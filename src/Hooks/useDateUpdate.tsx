import { useCardInfo } from "../Context/CardProvider";

const useDateUpdate = () => {
  const { dispatch } = useCardInfo();
  const handleDateUpdate = () => {
    dispatch({
      type: "SET_CREATED_AT",
      payload: {
        key: "createdAt",
        value: Date.now(),
      },
    });
  };

  return { handleDateUpdate };
};
export default useDateUpdate;
