import { ComponentMeta, ComponentStory } from "@storybook/react";
import CardNumber from "../../components/Form/CardNumber";

export default {
  title: "Components/Form/CardNumber", // story 이름
  component: CardNumber,
} as ComponentMeta<typeof CardNumber>;

const Template: ComponentStory<typeof CardNumber> = (args) => (
  <CardNumber {...args} />
);

export const Basic = Template.bind({});
