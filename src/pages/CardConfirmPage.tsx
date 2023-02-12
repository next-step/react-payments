import { useLayoutEffect, useState } from 'react';
//
import { useCardStore, useRouter } from '@/hooks';
import { CardAliasEditForm } from '@/templates/CardConfirmPage';

export default function CardConfirmPage() {
  const { getRouterState } = useRouter();
  const { getCurrentCard } = useCardStore();

  const { params } = getRouterState();
  const { cardPassword, cardSecurityCode, ...추가한_카드_정보 } = getCurrentCard();

  const [isEditPage, setEditPage] = useState(false);

  useLayoutEffect(() => {
    const isEditable = Object.keys({ ...params }).length > 0;
    setEditPage(isEditable);
  }, [params]);

  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">
          {isEditPage ? '카드의 별칭을 수정해주세요.' : '카드 등록이 완료되었습니다.'}
        </h2>
      </div>
      <CardAliasEditForm
        isEditPage={isEditPage}
        currentCard={추가한_카드_정보}
        deleteTargetCard={params?.card}
      />
    </div>
  );
}
