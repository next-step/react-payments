import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface CardResultProps {
  store: Record<string, unknown>;
}

export default function CardResult({ store }: CardResultProps) {
  const navigate = useNavigate();
  useEffect(() => {
    console.log(store);

    navigate("/mycards");
  }, []);

  return <></>;
}
