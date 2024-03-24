import BigCreditCard from "../Components/Cards/Card/BigCreditCard";
import Layout from "../Components/Layout/Layout";
import RegisterForm from "../Components/RegisterForm/RegisterForm";
import NextButton from "../Components/Button/NextButton";
import usePushCardInfo from "../Hooks/usePushCardInfo ";
import KeyCreatedAtLayout from "../Components/Cards/CardElements/Layout/PushStateLayout";
const Page3 = () => {
  const { handlePushCardInfo } = usePushCardInfo();

  const handleDate = () => {
    handlePushCardInfo();
  };

  return (
    <Layout>
      <KeyCreatedAtLayout>
        <h2 className="page-title"> 카드 추가</h2>
        <BigCreditCard />
        <RegisterForm />
        <NextButton handleUpdate={handleDate} />
      </KeyCreatedAtLayout>
    </Layout>
  );
};

export default Page3;
