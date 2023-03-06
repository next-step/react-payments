import { Story } from "@storybook/react";
import CardSecurityCodeInput from "../../components/CardSecurityCodeInput";

export default {
  title: "Components/CardSecurityCodeInput",
  component: CardSecurityCodeInput,
};

const Template: Story = () => <CardSecurityCodeInput />;

export const Default = Template.bind({});
