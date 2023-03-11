import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button } from '@/components/Common';
import { ROUTES } from '@/constants/routes';

import { useCardAddForm } from '@/context/CardAddForm';

export default function NextButtonBox() {
  const { 카드폼이입력된 } = useCardAddForm();

  const navigate = useNavigate();

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleClickNext = () => {
    setIsButtonClicked(true);

    if (!카드폼이입력된) {
      return;
    }

    navigate(ROUTES.CARD.COMPLETED);
  };

  const 폼이완성되지않은채로추가하면 = !카드폼이입력된 && isButtonClicked;

  return (
    <Box className="text-right">
      {폼이완성되지않은채로추가하면 && <div className="warning-text">모든 정보가 입력되지 않았습니다.</div>}
      <Button type="button" className="button-text" onClick={handleClickNext}>
        다음
      </Button>
    </Box>
  );
}
