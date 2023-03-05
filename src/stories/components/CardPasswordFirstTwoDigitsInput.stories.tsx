import { Story } from "@storybook/react";
import PasswordFirstTwoDigits from "../../components/CardPasswordFirstTwoDigitsInput";

export default {
  title: "Components/PasswordFirstTwoDigits",
  component: PasswordFirstTwoDigits,
};

const Template: Story = (args) => <PasswordFirstTwoDigits {...args} />;

export const Default = Template.bind({});
