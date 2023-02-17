import Card from "./Card";
import "./card.css";

export default {
  title: "Components/Card",
  component: Card,
};

const CardTemplate = (args) => <Card {...args} />;

export const Empty = CardTemplate.bind({});
Empty.args = {
  cardStatus: "empty-card",
  userName: "JEONG",
  expirationDate: "12/34",
};

export const Registered = CardTemplate.bind({});
Registered.args = {
  cardStatus: "small-card",
  userName: "JEONG",
  expirationDate: "12/34",
  cardName: "현정카드",
  cardNumbers: "1234-5678-****-****",
  cardNickname: "생활비카드",
};
