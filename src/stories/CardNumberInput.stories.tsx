import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import CardNumberInput, {
  CardNumberInputProps,
} from "../components/CardNumberInput";

export default {
  title: "Components/CardNumberInput",
  component: CardNumberInput,
} as Meta;

const Template: Story<CardNumberInputProps> = (args) => (
  <CardNumberInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: "",
  onChange: (value: string) => {},
};
