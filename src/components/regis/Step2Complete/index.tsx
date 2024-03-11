import Card from '../../card/Card.tsx';
import * as S from './index.style.ts';
import Button from '../../common/button/Button.tsx';
import { useNavigate } from 'react-router-dom';
import { CARD_SIZE } from '../../card/Card.constant.ts';
import Input from '../../common/input/Input.tsx';
import { INPUT_VARIANT } from '../../common/input/Input.constant.ts';
import { PAGES } from '../../../routes/route.constant.ts';
import { StepperType } from '../../common/stepper/Stepper.type.ts';
import { FC } from 'react';

const Step2Complete: FC<StepperType> = () => {
  const navigation = useNavigate();

  return (
    <S.Container>
      <S.Title>카드등록이 완료되었습니다.</S.Title>
      <Card
        size={CARD_SIZE.LARGE}
        name={'SUN'}
        expireYear={'21'}
        number={'1111-2222-****-****'}
        expireMonth={'4'}
        ownerName={'SUN'}
      />
      <Input variant={INPUT_VARIANT.UNDERLINE} style={{ width: '50%' }} />
      <S.Bottom>
        <Button onClick={() => navigation(PAGES.HOME)}>확인</Button>
      </S.Bottom>
    </S.Container>
  );
};

export default Step2Complete;
