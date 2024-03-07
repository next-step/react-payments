import { useNavigate } from "react-router-dom";
import useFunnel from "../../hooks/useFunnel/useFunnel";
import CardRegister from "./CardRegister/CardRegister";
import CardResult from "./CardResult/CardResult";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [Funnel, setStep, stepStore] = useFunnel(["register", "naming"]);

  console.log("stepStore", stepStore);

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
        <CardResult
          onSubmit={(value) => {
            setStep("naming", value);
            navigate("/mycards");
          }}
        />
      </Funnel.Page>
    </Funnel>
  );
}
