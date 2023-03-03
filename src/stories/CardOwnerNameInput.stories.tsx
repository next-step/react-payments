import { Story } from "@storybook/react";
import OwnerName, { OwnerNameProps } from "../components/CardOwnerNameInput";

export default {
  title: "Component/OwnerName",
  component: OwnerName,
};

const Template: Story<OwnerNameProps> = (args) => <OwnerName {...args} />;

export const Default = Template.bind({});
Default.args = {
  onChange: (value: string) => console.log(value),
};
