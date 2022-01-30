import InputCard from "../components/InputCard";
import CompletedCard from "../components/CompletedCard";

export default {
  title: "Components/Card",
};

export const AddCard = () => <InputCard name="NAME" />;
export const CompleteCard = () => <CompletedCard />;
