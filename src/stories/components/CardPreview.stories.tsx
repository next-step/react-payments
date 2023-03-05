import { Story } from "@storybook/react";
import CardPreview, { CardPreviewProps } from "../../components/CardPreview";

export default {
  title: "Components/CardPreview",
  component: CardPreview,
};

const Template: Story<CardPreviewProps> = (args) => <CardPreview {...args} />;

export const Default = Template.bind({});
Default.args = {
  cardNumber: "1111 2222 3333 4444",
  expirationDate: "12/22",
  ownerName: "James Bond",
};
