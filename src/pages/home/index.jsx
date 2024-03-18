import SubmitCard from "../../components/templates/submitCard";
import Funnel from "../../components/atoms/funnel";
import CardForm from "../../components/templates/cardForm";
import CardList from "../../components/templates/cardList";
import { useState } from "react";
import useCustomForm from "../../hooks/useForm";
import FormProvider from "../../hooks/useFormProvider";

const Home = () => {
  const [cardData, setCardData] = useState({});
  const form = useCustomForm({
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
    <FormProvider {...form}>
      <Funnel steps={["list", "form", "success"]}>
        <Funnel.Step name="list">
          <CardList cardData={cardData} />
        </Funnel.Step>
        <Funnel.Step name="form">
          <CardForm />
        </Funnel.Step>
        <Funnel.Step name="success">
          <SubmitCard setCardData={setCardData} />
        </Funnel.Step>
      </Funnel>
    </FormProvider>
  );
};

export default Home;
