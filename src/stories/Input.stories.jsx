import Input from "../components/Input";
import UnderlineInput from "../components/UnderlineInput";

export default {
  title: "Components/Input",
};

export const Text = () => <Input type="text" />;
export const Number = () => <Input type="number" />;
export const Password = () => <Input type="password" />;
export const InputUnderline = () => (
  <UnderlineInput
    type="text"
    placeholder="카드의 별칭을 입력해주세요."
    width="75%"
  />
);
