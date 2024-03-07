import Card from '@/components/card/Card';
import FlexCenter from '@/components/common/\bflex-center/FlexCenter';
import Button from '@/components/common/button/Button';
import Input from '@/components/common/input/Input';
import PageTitle from '@/components/common/page-title/PageTitle';
import { CardInfoContext } from '@/provider/CardInfoProvider';
import { StepContext } from '@/provider/step-provider/StepProvider';
import { useContext } from 'react';

const MAX_LENGTH = 10;
const CardRegisterComplete = () => {
  const { navigate } = useContext(StepContext);
  const { cardState } = useContext(CardInfoContext);
  const goToPage = () => {
    navigate('LIST');
  };

  return (
    <>
      <FlexCenter>
        <div className="mt-30">
          <PageTitle>카드 등록이 완료되었습니다.</PageTitle>
        </div>
        <div className="mt-10">
          <Card status="big" {...cardState} />
        </div>
        <div className="mb-10">
          <Input
            type="text"
            boxType="input-underline"
            placeholder="카드 별칭 (선택)"
            maxLength={MAX_LENGTH}
          />
        </div>
        <div className="mt-30 mb-10 button-box">
          <Button
            type="button"
            className="button-text"
            onClick={goToPage}
            style={{
              border: 'none',
              background: 'white',
            }}
          >
            다음
            {/* <span className="button-text">다음</span> */}
          </Button>
        </div>
      </FlexCenter>
    </>
  );
};

export default CardRegisterComplete;
