import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from "../components/Card";

export default {
  title: "Components/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  expiredDate: { month: "", year: "" },
};
