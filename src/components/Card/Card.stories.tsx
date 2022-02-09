import { Story } from "@storybook/react";
import Card, { Props } from "./Card";

export default {
  title: "componets/Card",
  component: Card,
  argTypes: {},
};

const Template: Story<Props> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const small = Template.bind({});
small.args = {
  size: "small",
};

export const large = Template.bind({});
large.args = {
  size: "large",
};

export const WithProps = Template.bind({});
WithProps.args = {
  cardNumbers: {
    first: "1234",
    second: "5678",
    third: "9012",
    fourth: "3456",
  },
  expiration: {
    month: "01",
    year: "20",
  },
  name: "YUJO",
  cardCompany: {
    name: "VISA",
    color: "bg-blue-300",
  },
};
