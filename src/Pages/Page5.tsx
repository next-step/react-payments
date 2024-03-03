import SmallCreditcard from "../Components/Cards/Card/SmallCreditCard";
import CardLayout from "../Components/Cards/CardElements/Layout/CardLayout";
import EmptyCardLayout from "../Components/Cards/CardElements/Layout/EmptyCardLayout";
import H2Text from "../Components/Text/H2Text";
import SpanText from "../Components/Text/SpanText";
import Layout45 from "../Components/Layout/Layout45";
import Flex from "../Components/Layout/Flex";

const Page5 = () => {
  return (
    <>
      <H2Text>5️⃣ 카드 목록</H2Text>
      <Layout45>
        <Flex>
          <H2Text className="page-title mb-10">보유 카드</H2Text>
        </Flex>
        <SmallCreditcard />
        <SpanText className="card-nickname">법인카드</SpanText>
        <CardLayout>
          <EmptyCardLayout>+</EmptyCardLayout>
        </CardLayout>
      </Layout45>
    </>
  );
};

export default Page5;
