import { Story } from "@storybook/react";

import LabeledTextInput, { Props } from "./LabeledTextInput";

export default {
  title: "Components/LabeledTextInput",
  component: LabeledTextInput,
};

const Template: Story<Props> = (args) => <LabeledTextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "input label",
};

export const WithMaxLength = Template.bind({});
WithMaxLength.args = {
  label: "input label",
  maxLength: 10,
};
