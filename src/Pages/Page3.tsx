import Creditcard from "../Components/Cards/Creditcard";
import Layout from "../Components/Layout/Layout";
import RegisterForm from "../Components/RegisterForm/RegisterForm";
const Page3 = () => {
  return (
    <>
      <h2>3️⃣ 카드 추가 - 입력 완료</h2>
      <Layout>
        <h2 className="page-title"> 카드 추가</h2>
        <Creditcard />
        <RegisterForm />
      </Layout>
    </>
  );
};

export default Page3;
