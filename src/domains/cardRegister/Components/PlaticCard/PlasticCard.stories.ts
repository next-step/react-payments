import { Meta, StoryObj } from "@storybook/react";
import PlasticCard from "./PlaticCard";

const meta: Meta<typeof PlasticCard> = {
  component: PlasticCard,
  title: "CardRegister/Component/PlasticCard",
};

export default meta;

type Story = StoryObj<typeof PlasticCard>;

export const Primary: Story = {
  args: {
    cardNumber: {
      firstNumber: "1234",
      secondNumber: "1234",
      thirdNumber: "1234",
      fourthNumber: "1234",
    },
    expiration: { month: "12", year: "12" },
    holderName: "peter",
    cardType: "준",
  },
};
