import { Story } from "@storybook/react";

import InputWrapper, { Props } from "./InputWrapper";

export default {
  title: "Components/InputWrapper",
  component: InputWrapper,
};

const Template: Story<Props> = (args) => <InputWrapper {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "input label",
  children: <input type="text" style={{ background: "none", border: "1px solid #cfcfcf" }} />,
};

export const MultipleInputs = Template.bind({});
MultipleInputs.args = {
  label: "multiple inputs",
  children: (
    <>
      <input type="text" style={{ background: "none", border: "1px solid #cfcfcf" }} />
      <input type="text" style={{ background: "none", border: "1px solid #cfcfcf" }} />
    </>
  ),
};
