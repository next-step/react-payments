import { Story } from "@storybook/react";

import CardRegisterPage from "./CardRegisterPage";

export default {
  title: "Pages/CardRegisterPage",
  component: CardRegisterPage,
};

const Template: Story = () => <CardRegisterPage />;

export const Default = Template.bind({});
Default.args = {};
