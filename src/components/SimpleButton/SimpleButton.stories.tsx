import { Story } from "@storybook/react";

import SimpleButton from "./SimpleButton";

export default {
  title: "Components/SimpleButton",
  component: SimpleButton,
};

const Template: Story = () => <SimpleButton>확인</SimpleButton>;

export const Default = Template.bind({});
Default.args = {};
