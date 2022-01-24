import { Story } from "@storybook/react";

import Header, { Props } from "./Header";

export default {
  title: "Components/Header",
  component: Header,
};

const Template: Story<Props> = (args) => <Header {...args}>카드추가</Header>;

export const Default = Template.bind({});
Default.args = {};

export const WithGoBackButton = Template.bind({});
WithGoBackButton.args = {
  goBackLink: "#",
};
