import React from 'react';
import { Link } from 'react-router-dom';

import { routes } from '@/router';

import { useNicknameSubmitEvent } from '../hooks';

export function CardNicknameSubmitButton() {
  const handleSubmitButtonClick = useNicknameSubmitEvent();

  return (
    <div className="button-box mt-50">
      <Link to={routes.home} className="button-text" onClick={handleSubmitButtonClick}>
        다음
      </Link>
    </div>
  );
}
