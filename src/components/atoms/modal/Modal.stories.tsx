import { ComponentMeta, ComponentStory } from "@storybook/react";
import { VirtualKeypad } from "../forms";
import Modal from "./Modal";

export default {
  title: "페이먼츠 미션/Components/Modal",
  component: Modal,
  args: {
    onClickDimmed: () => {
      alert("배경 클릭");
    },
  },
  argTypes: {
    children: {
      control: "disable",
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (props) => (
  <div style={{ width: "500px", height: "500px", position: "relative" }}>
    <Modal {...props} />
  </div>
);

export const example = Template.bind({});
example.args = {
  children: <div>기본 Modal</div>,
};
export const widthKeypad = Template.bind({});
widthKeypad.args = {
  children: <VirtualKeypad />,
};
