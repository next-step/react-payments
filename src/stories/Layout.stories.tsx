import { ComponentMeta, ComponentStory } from "@storybook/react";
import Layout from "../components/Layout";

export default {
  title: "Components/Layout", // story 이름
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
