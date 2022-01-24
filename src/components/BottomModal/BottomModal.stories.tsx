import { Story } from "@storybook/react";

import { BottomModal, Props } from "./BottomModal";

export default {
  title: "Components/BottomModal",
  component: BottomModal,
};

const Template: Story<Props> = (args) => <BottomModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  isShown: true,
  onClose: () => {},
  children: <div style={{ width: "100%", height: "80px", border: "1px solid #afafaf" }}>hey</div>,
};
