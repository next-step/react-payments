import { ComponentMeta, ComponentStory } from "@storybook/react";
import "../../styles.css";
import Header from ".";

export default {
  title: "Header",
  component: Header,
  argTypes: { backButtonPress: { action: "clicked" } },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "Title",
  hasBackButton: false,
};
