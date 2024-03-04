import NextButton from "../Components/Button/NextButton";
import H2Text from "../Components/Text/H2Text";
import CardNickNameInput from "../Components/Cards/CardElements/CardNickNameInput";
import BigCreditCard from "../Components/Cards/Card/BigCreditCard";
import Layout45 from "../Components/Layout/Layout45";
import Flex from "../Components/Layout/Flex";

const Page4 = () => {
  return (
    <>
      <H2Text>4️⃣ 카드 추가 완료</H2Text>
      <Layout45>
        <Flex>
          <H2Text className="page-title mb-10">
            카드등록이 완료되었습니다.
          </H2Text>
        </Flex>
        <BigCreditCard />
        <CardNickNameInput />
        <NextButton className="mt-50" />
      </Layout45>
    </>
  );
};

export default Page4;
