import { ComponentMeta, ComponentStory } from "@storybook/react";
import UserName from "../../components/Form/UserName";

export default {
  title: "Components/Form/Username", // story 이름
  component: UserName,
} as ComponentMeta<typeof UserName>;

const Template: ComponentStory<typeof UserName> = (args) => (
  <UserName {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};
