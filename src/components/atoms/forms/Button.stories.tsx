import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "../../index";

export default {
  title: "페이먼츠 미션/Components/Button",
  component: Button,
  argTypes: {
    type: {},
    nativeType: {
      defaultValue: "button",
    },
    invalid: {
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Button>;

const ButtonTemplate: ComponentStory<typeof Button> = (props) => (
  <Button {...props}>버튼</Button>
);

export const transparent = ButtonTemplate.bind({});
transparent.args = {
  type: "transparent",
};

export const keypad = ButtonTemplate.bind({});
keypad.args = {
  type: "keypad",
};
