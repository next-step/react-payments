import NextButton from "../Components/Button/NextButton";
import H2Text from "../Components/Text/H2Text";
import CardNickNameInput from "../Components/Cards/CardElements/CardNickNameInput";
import BigCreditCard from "../Components/Cards/Card/BigCreditCard";
import Layout45 from "../Components/Layout/Layout45";
import Flex from "../Components/Layout/Flex";
import { useCardInfo } from "../Context/CardProvider";
import { Validation } from "../Util/Validation";
import { useRef } from "react";

const Page4 = () => {
  const { dispatch, state } = useCardInfo();
  const inputRef = useRef<HTMLInputElement>(null);
  console.log("state", state);
  const handleNickName = () => {
    if (
      Validation.CardNickName.lengthCheck(inputRef.current?.value as string) ===
      true
    ) {
      dispatch({
        type: "SET_CARD_NICKNAME",
        payload: {
          key: "cardNickName",
          value: inputRef.current ? inputRef.current.value : "nickname",
        },
      });
    }
  };

  const NextToHapppen = () => {
    handleNickName();
  };

  return (
    <Layout45>
      <Flex>
        <H2Text className="page-title mb-10">카드등록이 완료되었습니다.</H2Text>
      </Flex>
      <BigCreditCard />
      <CardNickNameInput ref={inputRef} />
      <NextButton className="mt-50" handleUpdate={NextToHapppen} />
    </Layout45>
  );
};

export default Page4;
