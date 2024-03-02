import { FormProvider, useForm } from "react-hook-form";
import Card from ".";

export default {
  title: "molecules/card",
  component: Card,
  parameters: {
    layout: "fullscreen",
  },
};

const Form = (props) => {
  const { children } = props;
  const form = useForm({
    defaultValues: {
      name: "서재완",
      year: "23",
      month: "03",
      cardNumber1: "1234",
      cardNumber2: "1234",
      cardNumber3: "1234",
      cardNumber4: "1234",
      cardCompany: "kb",
    },
  });

  return <FormProvider {...form}>{children}</FormProvider>;
};

const FormTemplate = (args) => (
  <Form>
    <Card />
  </Form>
);
export const FormCard = FormTemplate.bind({});
FormCard.args = {};

const Template = (args) => {
  return <Card {...args} />;
};
export const StateCard = Template.bind({});
StateCard.args = {
  empty: false,
  name: "서재완",
  year: "23",
  month: "03",
  cardNumber1: "1234",
  cardNumber2: "1234",
  cardNumber3: "1234",
  cardNumber4: "1234",
  cardCompany: "kb",
};

export const EmptyCard = Template.bind({});
EmptyCard.args = {
  empty: true,
};
