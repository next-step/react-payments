import { Button } from '@/components/Common';

type CardSelectButtonProps = {
  onClick: () => void;
};

export default function CardSelectButton({ onClick }: CardSelectButtonProps) {
  return (
    <Button type="button" onClick={onClick}>
      카드 선택
    </Button>
  );
}
