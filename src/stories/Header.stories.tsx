import { ComponentStory, ComponentMeta } from "@storybook/react";
import Header from "../components/Header";

export default {
  title: "Components/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header />;

export const Basic = Template.bind({});
