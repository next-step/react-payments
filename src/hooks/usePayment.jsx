import { useState } from "react";
import { useNavigate } from "react-router-dom";

const defaultCardInfo = {
  company: "",
  number: "",
  owner: "",
  expiry: "",
  nickname: "",
  cvc: "",
  password1: "",
  password2: "",
  backgroundColor: "#e5e5e5",
};

const digitTypeInput = ["cvc", "password1", "password2"];

const formatDigitTypeInput = ["number", "expiry"];

const usePayment = () => {
  const [cardInfo, setCardInfo] = useState(defaultCardInfo);
  const [cardList, setCardList] = useState([]);
  const navigate = useNavigate();

  const onHandleCardInfoInput = evt => {
    let { value, id } = evt.target;
    if (!checkValidInputValue(value, id))
      value = value.subString(0, value.length - 1);
    setCardInfo({ ...cardInfo, [id]: formatInputValue(value, id) });
  };

  const onHandleResetCardInfo = () => {
    setCardInfo(defaultCardInfo);
  };

  const onHandleRegist = evt => {
    evt.preventDefault();
    setCardList([...cardList, cardInfo]);
    onHandleResetCardInfo();
    navigate("/");
  };

  const checkValidInputValue = (value, id) => {
    if (digitTypeInput.indexOf(id) !== -1 && value.match(/[^0-9]/)) {
      alert("숫자만 입력가능합니다.");
      return false;
    }
    return true;
  };

  const formatInputValue = (value, id) => {
    let formattedValue = value;

    if (formatDigitTypeInput.indexOf(id) === -1) return value;
    if (id === "number") {
      const regex = /[^0-9]/g;
      const cleanInput = value.replace(regex, "");
      const chunks = cleanInput.match(/.{1,4}/g);
      if (!chunks) {
        return cleanInput;
      }
      formattedValue = chunks.join("-");
    }
    if (id === "expiry") {
      const regex = /[^0-9]/g;
      const cleanInput = value.replace(regex, "");
      const chunks = cleanInput.match(/.{1,2}/g);
      if (!chunks) {
        return cleanInput;
      }
      formattedValue = chunks.join("/");
    }
    return formattedValue;
  };

  return {
    cardInfo,
    onHandleCardInfoInput,
    onHandleRegist,
    cardList,
  };
};

export default usePayment;
