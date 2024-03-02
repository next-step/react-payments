import { useForm, FormProvider } from "react-hook-form";

const Form = (props) => {
  const { children } = props;
  const form = useForm({
    defaultValues: {
      name: "test",
      year: "21",
      month: "12",
      cardNumber1: "1234",
      cardNumber2: "1234",
      cardNumber3: "1234",
      cardNumber4: "1234",
      cardCompany: "kb",
    },
  });

  return <FormProvider {...form}>{children}</FormProvider>;
};

export default Form;
