import { ComponentMeta, ComponentStory } from "@storybook/react";
import Modal from "../components/Modal";

export default {
  title: "Components/Modal", // story 이름
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal />;

export const Basic = Template.bind({});
Basic.args = {};
