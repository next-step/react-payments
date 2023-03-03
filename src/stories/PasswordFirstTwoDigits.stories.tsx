import { Story } from "@storybook/react";
import PasswordFirstTwoDigits from "../components/PasswordFirstTwoDigits";

export default {
  title: "Components/PasswordFirstTwoDigits",
  component: PasswordFirstTwoDigits,
};

const Template: Story = (args) => <PasswordFirstTwoDigits {...args} />;

export const Default = Template.bind({});
