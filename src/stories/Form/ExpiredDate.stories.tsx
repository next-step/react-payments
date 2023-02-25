import { ComponentMeta, ComponentStory } from "@storybook/react";
import ExpiredDate from "../../components/Form/ExpiredDate";

export default {
  title: "Components/Form/ExpiredDate", // story 이름
  component: ExpiredDate,
} as ComponentMeta<typeof ExpiredDate>;

const Template: ComponentStory<typeof ExpiredDate> = (args) => (
  <ExpiredDate {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};
