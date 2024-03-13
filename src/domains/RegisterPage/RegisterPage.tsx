import useFunnel from "../../hooks/useFunnel/useFunnel";
import CardRegister from "./CardRegister/CardRegister";
import CardNaming, { CardQuery } from "./CardNaming/CardNaming";
import CardResult from "./CardResult/CardResult";

export default function RegisterPage() {
  const [Funnel, setStep, stepStore] = useFunnel([
    "register",
    "naming",
    "result",
  ]);

  return (
    <Funnel>
      <Funnel.Page step="register">
        <CardRegister
          onSubmit={(value) => {
            setStep("naming", value);
          }}
        />
      </Funnel.Page>
      <Funnel.Page step="naming">
        <CardNaming
          card={stepStore["register"] as CardQuery}
          onSubmit={(value) => {
            setStep("result", value);
          }}
        />
      </Funnel.Page>
      <Funnel.Page step="result">
        <CardResult store={stepStore} />
      </Funnel.Page>
    </Funnel>
  );
}
