import { Link } from "react-router-dom";
import Card from "../../../components/card/Card";
import { FaPlus } from "react-icons/fa6";

export default function AddCardButton() {
  return (
    <Link to="/register">
      <Card variant="empty-card">
        <FaPlus />
      </Card>
    </Link>
  );
}
