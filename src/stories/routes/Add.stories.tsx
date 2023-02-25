import { ComponentMeta, ComponentStory } from "@storybook/react";
import Add from "../../routes/card/Add";

export default {
  title: "Components/routes/Add", // story 이름
  component: Add,
} as ComponentMeta<typeof Add>;

const Template: ComponentStory<typeof Add> = (args) => <Add />;

export const Basic = Template.bind({});
Basic.args = {};
