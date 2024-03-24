import NewSmallCreditcard from "../Components/Cards/Card/NewSmallCreditcard ";
import CardLayout from "../Components/Cards/CardElements/Layout/CardLayout";
import EmptyCardLayout from "../Components/Cards/CardElements/Layout/EmptyCardLayout";
import H2Text from "../Components/Text/H2Text";
import Layout45 from "../Components/Layout/Layout45";
import Flex from "../Components/Layout/Flex";
import { useRegisteredCards } from "../Context/RegisteredCardsProvider";
import { useContext, useEffect } from "react";
import { PageStepContext } from "../Context/PageStepProvider";
import usePushCardInfo from "../Hooks/usePushCardInfo ";
import { useCardInfo } from "../Context/CardProvider";
import { CardInfoType } from "../type/CardInfoType";
import useResetCardInfo from "../Hooks/useResetCardInfo";

const Page5 = () => {
  const { cards } = useRegisteredCards();
  const { handleProvise } = useContext(PageStepContext);
  const { handlePushCardInfo } = usePushCardInfo();
  const { dispatch } = useCardInfo();
  const { handleResetCardInfo } = useResetCardInfo();
  const handleClick = (key: string) => {
    const foundCard = cards.find((card) => card.key === key)!;
    dispatch({
      type: "TOTAL",
      payload: { key: "total", value: foundCard },
    });
    handleProvise();
  };

  useEffect(() => {
    handlePushCardInfo();
    return handleResetCardInfo();
  }, []);

  return (
    <>
      <Layout45>
        <Flex className="flex-container">
          <H2Text className="page-title mb-10"> 보유 카드</H2Text>
        </Flex>
        {cards
          .sort(
            (a: CardInfoType, b: CardInfoType) =>
              Number(b.createdAt) - Number(a.createdAt)
          )
          .map((card) => (
            <NewSmallCreditcard
              cardName={card.cardName}
              cardNumber={card.cardNumber}
              cardOwnerName={card.cardOwnerName}
              expiryDate={card.expiryDate}
              cardNickName={card.cardNickName}
              key={card.key}
              onClick={() => handleClick(card.key)}
            />
          ))}
        <CardLayout>
          <EmptyCardLayout>+</EmptyCardLayout>
        </CardLayout>
      </Layout45>
    </>
  );
};

export default Page5;
