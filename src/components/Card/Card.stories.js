import CardItem from ".";

export default {
  title: "Component/Card",
  component: CardItem,
};

export const card = (args) => <CardItem {...args} />;

card.args = {
  data: {
    name: "포코카드",
    numbers: [1111, 2222, 3333, 4444],
    owner: "SUN",
    expiryDate: "12/03",
  },
};

card.storyName = "default";
