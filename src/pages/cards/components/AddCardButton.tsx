import { useNavigate } from "react-router-dom";
import Card from "../../../components/ui-kit/Card";
import { FaPlus } from "react-icons/fa6";
import Button from "../../../components/ui-kit/Button";

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
