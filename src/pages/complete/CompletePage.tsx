import Card from '../../components/card/Card.tsx';
import * as S from './CompletePage.style.ts';
import Button from '../../components/common/button/Button.tsx';
import { useNavigate } from 'react-router-dom';
import { CARD_SIZE } from '../../components/card/Card.constant.ts';
import Input from '../../components/common/input/Input.tsx';
import { INPUT_VARIANT } from '../../components/common/input/Input.constant.ts';
import { PAGES } from '../../routes/route.constant.ts';

const CompletePage = () => {
  const navigation = useNavigate();

  return (
    <S.Container>
      <S.Title>카드등록이 완료되었습니다.</S.Title>
      <Card
        size={CARD_SIZE.LARGE}
        name={'SUN'}
        year={21}
        number={'1111-2222-****-****'}
        month={4}
        ownerName={'SUN'}
      />
      <Input variant={INPUT_VARIANT.UNDERLINE} style={{ width: '50%' }} />
      <S.Bottom>
        <Button onClick={() => navigation(PAGES.HOME)}>확인</Button>
      </S.Bottom>
    </S.Container>
  );
};

export default CompletePage;
