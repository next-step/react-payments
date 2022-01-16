import { Story } from "@storybook/react";

import CardPasswordInput from "./CardPasswordInput";

export default {
  title: "Components/CardPasswordInput",
  component: CardPasswordInput,
};

const Template: Story = () => <CardPasswordInput />;

export const Default = Template.bind({});
Default.args = {};
