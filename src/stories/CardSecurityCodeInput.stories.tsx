import { Story } from "@storybook/react";
import Cvc from "../components/CardSecurityCodeInput";

export default {
  title: "Components/Cvc",
  component: Cvc,
};

const Template: Story = (args) => <Cvc {...args} />;

export const Default = Template.bind({});
Default.args = {};
