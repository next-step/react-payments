import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

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

const Template: ComponentStory<typeof Button> = (props) => (
  <Button {...props}></Button>
);

export const transparent = Template.bind({});
transparent.args = {
  type: "transparent",
};

export const keypad = Template.bind({});
keypad.args = {
  type: "keypad",
};
