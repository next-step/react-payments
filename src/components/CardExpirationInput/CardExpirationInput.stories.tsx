import { Story } from "@storybook/react";
import { CardNumber } from "../../@types";

import CardExpirationInput, { Props } from "./CardExpirationInput";

export default {
  title: "Components/CardExpirationInput",
  component: CardExpirationInput,
};

const Template: Story<Props> = (args) => <CardExpirationInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  onChange: (month: string, year: string) => {
    console.log(month, year);
  },
};
