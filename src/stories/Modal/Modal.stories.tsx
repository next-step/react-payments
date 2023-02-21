import { ComponentStory, ComponentMeta } from "@storybook/react";

import Modal from "components/common/Modal";

export default {
  title: "Modal",
  component: Modal,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Base = Template.bind({});
Base.args = {
  modalItem: [
    { item: "클린 카드" },
    { item: "클린 카드" },
    { item: "클린 카드" },
    { item: "클린 카드" },
    { item: "클린 카드" },
    { item: "클린 카드" },
    { item: "클린 카드" },
    { item: "클린 카드" },
  ],
};
