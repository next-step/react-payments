import Button from "./Button";

export default {
  title: "Components/Button",
  components: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "click me",
  handleClick: () => alert("clicked"),
};
