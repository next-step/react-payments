import { Button } from '@/components/Common';
import { useCardCompanyModalContext } from '@/context';

export default function CardSelectButton() {
  const { handleClickOpenModal } = useCardCompanyModalContext();
  return (
    <Button type="button" onClick={handleClickOpenModal}>
      카드 선택
    </Button>
  );
}
