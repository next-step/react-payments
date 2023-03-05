import React from "react";
import { Story } from "@storybook/react";
import CardSubmitButton from "../../components/CardSubmitButton";

export default {
  title: "Components/CardSubmitButton",
  component: CardSubmitButton,
};

const Template: Story = (args) => <CardSubmitButton {...args} />;

export const Default = Template.bind({});
