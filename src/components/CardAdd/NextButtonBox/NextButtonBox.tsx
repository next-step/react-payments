import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button } from '@/components/Common';
import { ROUTES } from '@/constants/routes';
import {
  useCardExpirationContext,
  useCardNumberContext,
  useCardPasswordContext,
  useCardSecretCodeContext,
  useCardSelectModalContext,
} from '@/context';

export default function NextButtonBox() {
  const { 카드CVC가모두입력된 } = useCardSecretCodeContext();
  const { 카드비밀번호가모두입력된 } = useCardPasswordContext();
  const { 카드사가선택된 } = useCardSelectModalContext();
  const { 카드번호가모두입력된 } = useCardNumberContext();
  const { 만료일이모두입력된 } = useCardExpirationContext();

  const isCompleted = useMemo(() => {
    return [
      카드번호가모두입력된,
      만료일이모두입력된,
      카드CVC가모두입력된,
      카드비밀번호가모두입력된,
      카드사가선택된,
    ].every((elem) => elem === true);
  }, [만료일이모두입력된, 카드CVC가모두입력된, 카드번호가모두입력된, 카드비밀번호가모두입력된, 카드사가선택된]);

  const navigate = useNavigate();

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleClickNext = () => {
    setIsButtonClicked(true);

    if (!isCompleted) {
      return;
    }

    navigate(ROUTES.CARD.COMPLETED);
  };

  const 폼이완성되지않은채로추가하면 = !isCompleted && isButtonClicked;

  return (
    <Box className="text-right">
      {폼이완성되지않은채로추가하면 && <div className="warning-text">모든 정보가 입력되지 않았습니다.</div>}
      <Button type="button" className="button-text" onClick={handleClickNext}>
        다음
      </Button>
    </Box>
  );
}
