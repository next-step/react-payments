import { useCardInfo } from "../Context/CardProvider";

const useResetCardInfo = () => {
  const { dispatch } = useCardInfo();
  const handleResetCardInfo = () => {
    dispatch({
      type: "RESET",
    });
  };

  return { handleResetCardInfo };
};
export default useResetCardInfo;
