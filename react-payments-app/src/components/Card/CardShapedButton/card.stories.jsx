import CardShapedButton from "./Card";
import "../card.css";

export default {
  title: "Components/Card/CardShapedButton",
  component: CardShapedButton,
};

const Template = (args) => <CardShapedButton {...args} />;

export const Default = Template.bind({});
