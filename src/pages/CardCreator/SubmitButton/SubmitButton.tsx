import React from 'react';
import { Link } from 'react-router-dom';

import { routes } from '@/routes';

import { useCardSubmitEvent } from '../hooks';

interface SubmitButtonProps {}

export function SubmitButton(_: SubmitButtonProps) {
  const handleSubmitButtonClick = useCardSubmitEvent();

  return (
    <div className="button-box">
      <Link to={routes.createCardNickname()} className="button-text" onClick={handleSubmitButtonClick}>
        다음
      </Link>
    </div>
  );
}
