import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button } from '@/components/Common';

type NextButtonBoxProps = {
  isCompleted: boolean;
};

export default function NextButtonBox({ isCompleted }: NextButtonBoxProps) {
  const navigate = useNavigate();

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleClickNext = () => {
    setIsButtonClicked(true);

    if (!isCompleted) {
      return;
    }

    navigate('/card-completed');
  };

  const 폼이완성되지않은채로추가하면 = !isCompleted && isButtonClicked;

  return (
    <Box className="button-box">
      {폼이완성되지않은채로추가하면 && <div className="warning-text">모든 정보가 입력되지 않았습니다.</div>}
      <Button type="button" className="button-text" onClick={handleClickNext}>
        다음
      </Button>
    </Box>
  );
}
