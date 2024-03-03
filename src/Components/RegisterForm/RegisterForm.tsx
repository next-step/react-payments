import CardNumber from "./RegisterFormElements/CardNumber";
import ExpireDate from "./RegisterFormElements/ExpireDate";
import CardOwner from "./RegisterFormElements/CardOwner";
import CvcCcv from "./RegisterFormElements/CvcCcv";
import CardPassword from "./RegisterFormElements/CardPassword";
import NextButton from "../Button/NextButton";

const RegisterForm = () => {
  return (
    <>
      <CardNumber />
      <ExpireDate />
      <CardOwner />
      <CvcCcv />
      <CardPassword />
      <NextButton />
    </>
  );
};

export default RegisterForm;
