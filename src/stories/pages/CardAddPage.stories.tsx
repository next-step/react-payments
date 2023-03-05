import { Story } from "@storybook/react";
import CardAddPage, { CardAddPageProps } from "../../pages/CardAddPage";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Pages/CardAddPage",
  component: CardAddPage,
};

const Template: Story<CardAddPageProps> = (args) => (
  <MemoryRouter>
    <CardAddPage {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});

Default.args = {
  handleGoBack: () => console.log("go back"),
};
