import { FormProvider, useForm } from "react-hook-form";
import SubmitCard from "../../components/templates/submitCard";
import Funnel from "../../components/atoms/funnel";
import CardForm from "../../components/templates/cardForm";
import CardList from "../../components/templates/cardList";
import { useState } from "react";

const Home = () => {
  const [cardList, setCardList] = useState([]);
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
    <FormProvider {...form}>
      <Funnel steps={["list", "form", "success"]}>
        <Funnel.Step name="list">
          <CardList cardList={cardList} />
        </Funnel.Step>
        <Funnel.Step name="form">
          <CardForm />
        </Funnel.Step>
        <Funnel.Step name="success">
          <SubmitCard setCardList={setCardList} />
        </Funnel.Step>
      </Funnel>
    </FormProvider>
  );
};

export default Home;
