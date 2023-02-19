import { ComponentMeta, ComponentStory } from "@storybook/react";
import Code from "../../components/Form/Code";

export default {
  title: "Components/Form/Code", // story 이름
  component: Code,
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
