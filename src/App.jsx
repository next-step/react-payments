import { FormProvider, useForm } from "react-hook-form";
import Input from "./components/atoms/input";

const Form = (props) => {
  const { children } = props;
  const form = useForm({});

  return <FormProvider {...form}>{children}</FormProvider>;
};

function App() {
  return (
    <Form>
      <Input
        type={"number"}
        secret={true}
        name={"secret_number"}
        maxLength={4}
        max={12}
      />
    </Form>
  );
}

export default App;
