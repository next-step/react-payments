import React from "react";
import { Story, Meta } from "@storybook/react";
import ExpirationDate from "../components/ExpirationDate";

export default {
  title: "Components/ExpirationDate",
  component: ExpirationDate,
} as Meta;

const Template: Story = (args) => <ExpirationDate {...args} />;

export const Default = Template.bind({});
