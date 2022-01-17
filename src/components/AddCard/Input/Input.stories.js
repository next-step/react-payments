import Input from ".";

export default {
  title: "Component/Input",
  component: Input,
};

export const input = (args) => <Input {...args} />;

input.args = {
  field: {
    id: "expiry-date",
    ariaLabel: "월 2자리",
    ref: null,
    type: "password",
    name: "monthField",
    placeholder: "MM",
  },
  background: true,
};
