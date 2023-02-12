import { CSSProperties, useCallback } from "react";
import { Button } from "../../components";
import { useMyCardsContext } from "../../providers";

interface IProps {
  id: string;
}

const DELETE_BUTTON_STYLE: CSSProperties = {
  position: "absolute",
  top: "0",
  left: "calc(50% + 104px - 36px)",
  backgroundColor: "#FFF",
  borderRadius: "5px",
  opacity: 0.7,
  fontWeight: "normal",
};

export default function CardDeleteButton({ id }: IProps) {
  const { deleteCard } = useMyCardsContext();
  const handleClick = useCallback(() => deleteCard(id), [deleteCard, id]);

  return (
    <Button style={DELETE_BUTTON_STYLE} onClick={handleClick}>
      삭제
    </Button>
  );
}
