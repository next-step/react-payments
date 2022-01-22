import { Story } from "@storybook/react";

import Header, { Props } from "./Header";

export default {
  title: "Components/Header",
  component: Header,
};

const Template: Story<Props> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "카드추가",
};

export const WithGoBackButton = Template.bind({});
WithGoBackButton.args = {
  title: "카드추가",
  goBackLink: "#",
};
