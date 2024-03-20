import Card from '@/components/card/Card';
import ButtonBox from '@/components/common/button-box/ButtonBox';
import Button from '@/components/common/button/Button';
import FlexCenter from '@/components/common/flex-center/FlexCenter';
import PageTitle from '@/components/common/page-title/PageTitle';

import { isLimitFailed } from '@/domain/validate';
import useCardContext from '@/provider/card-info-provider/hook/useCardContext';

import CardNickname from './components/card-nickname/CardNickname';
import useModalContext from '@/provider/modal-provider/hook/useModalContext';
import useStepContext from '@/provider/step-provider/hook/useStepContext';

const CardRegisterComplete = () => {
  const { navigate } = useStepContext();
  const { cardState, reset, addCard } = useCardContext();
  const { cardBrand, resetCardBrand } = useModalContext();

  const isNickNameValid = (nickname = '') => isLimitFailed(nickname, 10);

  const goToPage = () => {
    const { nickname } = cardState;
    const { cardBrandName } = cardBrand;

    const isVaild = isNickNameValid(nickname);
    const cardDefaultNickname = isVaild ? nickname : cardBrandName;

    addCard({ ...cardState, ...cardBrand, nickname: cardDefaultNickname });
    reset();
    resetCardBrand();
    navigate('LIST');
  };

  return (
    <div className="app flex-column-center">
      <FlexCenter>
        <PageTitle className="mb-10">카드 등록이 완료되었습니다.</PageTitle>
      </FlexCenter>
      <Card status="big" {...cardBrand} {...cardState} />
      <CardNickname />
      <ButtonBox className="mt-50">
        <Button type="button" className="button-border-none" onClick={goToPage}>
          <span className="button-text">다음</span>
        </Button>
      </ButtonBox>
    </div>
  );
};

export default CardRegisterComplete;
