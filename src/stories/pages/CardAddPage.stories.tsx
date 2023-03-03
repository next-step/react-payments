import { Story } from "@storybook/react";
import CardAddPage from "../../pages/CardAddPage";

export default {
  title: "Pages/CardAddPage",
  component: CardAddPage,
};

const Template: Story = () => <CardAddPage />;

export const Default = Template.bind({});
