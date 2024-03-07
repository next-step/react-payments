import { useNavigate } from "react-router-dom";

interface CardResultProps {
  store: Record<string, unknown>;
}

export default function CardResult({ store }: CardResultProps) {
  const navigate = useNavigate();
  console.log(store);
  navigate("/mycards");
  return <></>;
}
