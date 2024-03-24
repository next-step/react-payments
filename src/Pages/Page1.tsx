import NextButton from "../Components/Button/NextButton";
import EmptyCreditcard from "../Components/Cards/Card/EmptyCreditcard";
import Layout from "../Components/Layout/Layout";
import RegisterForm from "../Components/RegisterForm/RegisterForm";
import H2Text from "../Components/Text/H2Text";

const Page1 = () => {
  return (
    <Layout>
      <H2Text> 1️⃣ 카드 추가</H2Text>
      <EmptyCreditcard />
      <RegisterForm />
      <NextButton />
    </Layout>
  );
};

export default Page1;
