import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Card from ".";
import "styles/index.css";

export default {
  title: "components/Card",
  component: Card,
  parameters: {
    componentSubtitle: "카드 컴포넌트",
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  cardNumbers:  ["1111", "2222", "3333", "4444"],
  cardExpiration: {
    month: "12",
    year: "23",
  },
  cardOwnerName: '힝구',
  onClick: action("onClick"),
  isHypen: () => " - ",
  maskingCardNumbers: (number: string) => number.replace(/./g, "*"),
  showCardName: (name: string) => (name ? name : "NAME"),
  showCardExpiry: (month: string, year: string) => {
    return month ? `${month} / ${year || "YY"}` : "MM / YY";
  }
};