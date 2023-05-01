import { Story } from "@storybook/react";
import OwnerName from "../../components/CardOwnerNameInput";

export default {
  title: "Components/OwnerName",
  component: OwnerName,
};

const Template: Story = () => <OwnerName />;

export const Default = Template.bind({});
