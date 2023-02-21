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

const cardCompanyList = [
  {
    company: "포코카드",
    backgroundColor: "red",
  },
  {
    company: "준카드",
    backgroundColor: "palegreen",
  },
  {
    company: "혜원카드",
    backgroundColor: "skyblue",
  },
  {
    company: "윤호카드",
    backgroundColor: "yellow",
  },
  // {
  //   company: "다빈카드",
  //   backgroundColor: "pink",
  // },
  // {
  //   company: "나나카드",
  //   backgroundColor: "yellowgreen",
  // },
  // {
  //   company: "치치카드",
  //   backgroundColor: "plum",
  // },
  // {
  //   company: "사나카드",
  //   backgroundColor: "lightseagreen",
  // },
  // {
  //   company: "랄랄카드",
  //   backgroundColor: "burlywood",
  // },
];

const usePayment = () => {
  const [cardInfo, setCardInfo] = useState(defaultCardInfo);
  const [cardList, setCardList] = useState([]);
  const [isShowPopup, setIsShowPopup] = useState(true);

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

  const onHandleSubmit = evt => {
    evt.preventDefault();
    navigate("/save");
  };

  const checkValidInputValue = (value, id) => {
    if (digitTypeInput.indexOf(id) !== -1 && value.match(/[^0-9]/)) {
      alert("숫자만 입력가능합니다.");
      return false;
    }
    return true;
  };

  const onHandleCompanyPopupClick = evt => {
    const clickedElement = evt.target.closest(".modal-item-container");
    if (clickedElement) {
      const { id } = clickedElement;
      const [owner, backgroundColor] = id.split("-");
      setCardInfo({
        ...cardInfo,
        owner,
        backgroundColor,
      });
    }
    setIsShowPopup(false);
  };

  const onHandleSave = () => {
    setCardList([...cardList, cardInfo]);
    navigate("/");
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
    onHandleSave,
    cardList,
    cardCompanyList,
    onHandleCompanyPopupClick,
    onHandleSubmit,
    isShowPopup,
    onHandleResetCardInfo,
    setIsShowPopup,
  };
};

export default usePayment;
