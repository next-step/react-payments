import { Story } from "@storybook/react";
import Cvc, { CvcProps } from "../components/CardSecurityCode";

export default {
  title: "Components/Cvc",
  component: Cvc,
};

const Template: Story<CvcProps> = (args) => <Cvc {...args} />;

export const Default = Template.bind({});
Default.args = {};
