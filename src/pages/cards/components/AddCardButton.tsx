import { useNavigate } from "react-router-dom";
import Card from "../../../components/card/Card";
import { FaPlus } from "react-icons/fa6";
import Button from "../../../components/button/Button";

export default function AddCardButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/register");
  };
  return (
    <Button onClick={handleClick}>
      <Card variant="empty-card">
        <FaPlus />
      </Card>
    </Button>
  );
}
