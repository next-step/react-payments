import { FormProvider, useForm } from "react-hook-form";
import CardForm from "./components/templates/cardForm";
import SubmitCard from "./components/templates/submitCard";

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
        <SubmitCard />
      </FormProvider>
    </div>
  );
}

export default App;
