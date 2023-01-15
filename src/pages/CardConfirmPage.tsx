import { Button, Card } from '@/components';
import { CardState, useCardState } from '@/contexts/CardContext';
import { useRouter } from '@/hooks';

export default function CardConfirmPage() {
  const { push } = useRouter();
  const cardState = useCardState();
  const { cardPassword, cardSecurityCode, ...추가한_카드_정보 } = cardState.at(-1) as CardState;

  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
      </div>
      <Card size="big" {...추가한_카드_정보} />
      <div className="input-container flex-center w-100">
        <input
          className="input-underline w-75"
          type="text"
          placeholder="카드의 별칭을 입력해주세요."
        />
      </div>
      <div className="button-box flex-space-between mt-50">
        <Button onClick={() => push('/')}>삭제</Button>
        <Button onClick={() => push('/')}>다음</Button>
      </div>
    </div>
  );
}
