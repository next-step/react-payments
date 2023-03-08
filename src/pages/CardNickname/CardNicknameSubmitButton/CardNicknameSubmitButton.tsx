import React, { MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '@/routes';
import { useCardContextApiSelector, useSelectCardCompany, useSelectCardNickname } from '@/stores/CardCreatorContext';

export function CardNicknameSubmitButton() {
  const cardNickname = useSelectCardNickname();
  const cardCompany = useSelectCardCompany();
  const apis = useCardContextApiSelector();

  const handleSubmitButtonClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const { value, checkIsValid } = cardNickname!;
    if (!checkIsValid(value)) {
      e.preventDefault();
      alert('카드 별명은 10자리를 넘을 수 없습니다.');
      return;
    }

    if (!value) {
      apis?.dispatch({ type: 'cardNickname', payload: { value: cardCompany!.name } });
    }

    // TODO: randomId를 달고 localhost에 저장, dynamicRoute가 있는 경우엔 기존것을 그대로 사용
  };

  return (
    <div className="button-box mt-50">
      <Link to={routes.home} className="button-text" onClick={handleSubmitButtonClick}>
        다음
      </Link>
    </div>
  );
}
