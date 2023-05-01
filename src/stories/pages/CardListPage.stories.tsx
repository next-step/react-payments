import { Story } from "@storybook/react";
import CardListPage from "../../pages/CardListPage";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Pages/CardListPage",
  component: CardListPage,
};

const Template: Story = () => (
  <MemoryRouter>
    <CardListPage />
  </MemoryRouter>
);

export const Default = Template.bind({});
