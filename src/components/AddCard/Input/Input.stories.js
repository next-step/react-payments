import Input from ".";
import * as InputStyle from "../../style/input";

export default {
  title: "Component/Input",
  component: Input,
};

export const Basic = (args) => <Input {...args} />;

Basic.args = {
  field: {
    id: "expiry-date",
    ariaLabel: "월 2자리",
    ref: null,
    type: "password",
    name: "monthField",
    placeholder: "MM",
    maxLength: 2,
  },
  background: true,
};

export const withLabel = () => (
  <InputStyle.Container>
    <InputStyle.Label htmlFor="single-input">single</InputStyle.Label>
    <Input
      field={{
        id: "single-input",
        ref: null,
        type: "password",
        name: "monthField",
        placeholder: "MM",
        maxLength: 2,
      }}
      background
    />
  </InputStyle.Container>
);
