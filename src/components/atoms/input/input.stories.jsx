import Form from "../../../utils/test/form";
import Input from ".";

export default {
  title: "atoms/input",
  component: Input,
  parameters: {
    layout: "fullscreen",
  },
};

const Template = (args) => (
  <Form>
    <Input {...args} />
  </Form>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Type something...",
  name: "input",
};
