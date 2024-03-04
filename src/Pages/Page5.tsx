import NewSmallCreditcard from "../Components/Cards/Card/NewSmallCreditcard ";
import CardLayout from "../Components/Cards/CardElements/Layout/CardLayout";
import EmptyCardLayout from "../Components/Cards/CardElements/Layout/EmptyCardLayout";
import H2Text from "../Components/Text/H2Text";
import Layout45 from "../Components/Layout/Layout45";
import Flex from "../Components/Layout/Flex";
import { useCardInfo } from "../Context/CardProvider";
import { useEffect } from "react";
import { useRegisteredCards } from "../Context/RegisteredCardsProvider";

const Page5 = () => {
  const { state } = useCardInfo();
  const { cards, handleCard } = useRegisteredCards();
  useEffect(() => {
    handleCard(state);
  }, []);
  return (
    <>
      <H2Text>5️⃣ 카드 목록</H2Text>
      <Layout45>
        <Flex>
          <H2Text className="page-title mb-10"> 보유 카드</H2Text>
        </Flex>
        {cards.map((card) => (
          <NewSmallCreditcard
            cardName={card.cardName}
            cardNumber={card.cardNumber}
            cardOwnerName={card.cardOwnerName}
            expiryDate={card.expiryDate}
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
