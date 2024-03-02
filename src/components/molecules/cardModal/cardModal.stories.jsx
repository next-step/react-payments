import { FormProvider, useForm } from "react-hook-form";
import CardModal from ".";

export default {
  title: "molecules/cardModal",
  component: CardModal,
  parameters: {
    layout: "fullscreen",
  },
};

const Form = (props) => {
  const { children } = props;
  const form = useForm({
    defaultValues: {},
  });

  return <FormProvider {...form}>{children}</FormProvider>;
};

const FormTemplate = (args) => (
  <Form>
    <CardModal toggleModal={() => {}} submit={() => {}} />
  </Form>
);
export const Default = FormTemplate.bind({});
Default.args = {};
