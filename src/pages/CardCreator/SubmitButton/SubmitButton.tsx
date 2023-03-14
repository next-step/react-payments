import React, { MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import { routes } from '@/routes';
import { useErrorContextApiSelector } from '@/stores/ErrorContext';
import { useValidateCardInfos } from '@/hooks/useValidateCardInfos';

interface SubmitButtonProps {}

export function SubmitButton(_: SubmitButtonProps) {
  const errorApis = useErrorContextApiSelector();

  const error = useValidateCardInfos();

  // select된 inputState가 변하면 아래 함수도 새로 만들어져야 하므로, useCallback은 적용하지 않음.
  const handleSubmitButtonClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (error) {
      e.preventDefault();

      const errorType = error.type;
      errorApis?.dispatch({ type: errorType, message: null });
      error.store.ref?.focus();
    }
  };

  return (
    <div className="button-box">
      <Link to={routes.createCardNickname()} className="button-text" onClick={handleSubmitButtonClick}>
        다음
      </Link>
    </div>
  );
}
