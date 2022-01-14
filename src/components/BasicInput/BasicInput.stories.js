import BasicInput from "./BasicInput";

export default {
  title: "Component/Input",
  component: BasicInput,
  argTypes: {
    type: {
      options: ["text", "password", "number"],
      control: { type: "select" },
    },
    width: {
      options: ["15%", "25%", "100%"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <BasicInput {...args} />;

export const Input = Template.bind({});

Input.args = {
  placeholder: "입력하세요",
};
