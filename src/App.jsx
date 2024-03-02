import { FormProvider, useForm } from "react-hook-form";
import CardForm from "./components/templates/cardForm";

function App() {
  const form = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      year: "",
      month: "",
      cardNumber1: "",
      cardNumber2: "",
      cardNumber3: "",
      cardNumber4: "",
      cardCompany: "",
    },
  });

  return (
    <div className="app">
      <FormProvider {...form}>
        <CardForm />
      </FormProvider>
    </div>
  );
}

export default App;
