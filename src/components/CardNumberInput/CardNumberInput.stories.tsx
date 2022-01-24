import { Story } from "@storybook/react";
import { CardNumber } from "../../@types";

import CardNumberInput, { Props } from "./CardNumberInput";

export default {
  title: "Components/CardNumberInput",
  component: CardNumberInput,
};

const Template: Story<Props> = (args) => <CardNumberInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  onChange: (cardNumber: CardNumber) => {
    console.log(cardNumber);
  },
};
