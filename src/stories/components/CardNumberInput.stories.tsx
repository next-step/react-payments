import React from "react";
import { Story } from "@storybook/react/types-6-0";
import CardNumberInput from "../../components/CardNumberInput";

export default {
  title: "Components/CardNumberInput",
  component: CardNumberInput,
};

const Template: Story = () => <CardNumberInput />;

export const Default = Template.bind({});
