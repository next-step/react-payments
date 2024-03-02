const Form = (props) => {
  const { children } = props;
  const form = useForm();

  return <FormProvider {...form}>{children}</FormProvider>;
};

export default Form;
