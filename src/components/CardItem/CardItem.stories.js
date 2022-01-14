import CardItem from "./CardItem";

export default {
  title: "Component/Card",
  component: CardItem,
};

const Template = (args) => <CardItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: {
    name: "포코카드",
    numbers: [1111, 2222, 3333, 4444],
    owner: "SUN",
    expiryDate: "12/03",
  },
};
