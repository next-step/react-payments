import { ComponentMeta, ComponentStory } from "@storybook/react";
import Password from "../../components/Form/Password";

export default {
  title: "Components/Form/Password", // story 이름
  component: Password,
} as ComponentMeta<typeof Password>;

const Template: ComponentStory<typeof Password> = (args) => (
  <Password {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};
