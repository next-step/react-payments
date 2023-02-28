import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "components/Button/Button";
import { withRouter } from "storybook-addon-react-router-v6";
import { Form } from "components/Form/Form";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Form",
  component: Form,
  decorators: [withRouter],
} as ComponentMeta<typeof Form>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Form> = (args) => <Form />;

export const Card = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
