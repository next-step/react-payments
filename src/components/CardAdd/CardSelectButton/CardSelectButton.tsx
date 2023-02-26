import { Button } from '@/components/Common';
import { useCardSelectModalContext } from '@/context';

export default function CardSelectButton() {
  const { handleClickOpenModal } = useCardSelectModalContext();
  return (
    <Button type="button" onClick={handleClickOpenModal}>
      카드 선택
    </Button>
  );
}
