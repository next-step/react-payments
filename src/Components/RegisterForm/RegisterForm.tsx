import CardNumber from "./RegisterFormElements/CardNumber";
import ExpireDate from "./RegisterFormElements/ExpireDate";
import CardOwner from "./RegisterFormElements/CardOwner";
import CvcCcv from "./RegisterFormElements/CvcCcv";
import CardPassword from "./RegisterFormElements/CardPassword";

const RegisterForm = () => {
  return (
    <>
      <CardNumber />
      <ExpireDate />
      <CardOwner />
      <CvcCcv />
      <CardPassword />
    </>
  );
};

export default RegisterForm;
