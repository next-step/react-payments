import Layout from "../Components/Layout/Layout";
import Modal from "../Components/Modal/Modal";
import SmallCreditcard from "../Components/Cards/Card/SmallCreditCard";
import RegisterForm from "../Components/RegisterForm/RegisterForm";
import H2Text from "../Components/Text/H2Text";

const Page2 = () => {
  return (
    <>
      <H2Text>2️⃣ 카드 추가 - 카드사 선택</H2Text>
      <Layout>
        <H2Text className="page-title">2️⃣ 카드 추가</H2Text>
        <SmallCreditcard />
        <RegisterForm />
        <Modal />
      </Layout>
    </>
  );
};

export default Page2;
