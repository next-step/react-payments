import { Story } from "@storybook/react";
import CardSecurityCodeInput, {
  CardSecurityCodeInputProps,
} from "../../components/CardSecurityCodeInput";

export default {
  title: "Components/CardSecurityCodeInput",
  component: CardSecurityCodeInput,
};

const Template: Story<CardSecurityCodeInputProps> = (args) => (
  <CardSecurityCodeInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: "",
  onChange: () => {},
};
