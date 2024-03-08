import PageTitle from '@components/@common/PageTitle';
import Button from '@components/@common/button/molecules/Button';
import HStack from '@components/@common/layout/HStack';

import CardBottom from '@components/Card/atoms/CardBottom';
import CardBox from '@components/Card/atoms/CardBox';
import CardMiddle from '@components/Card/atoms/CardMiddle';
import CardSize from '@components/Card/atoms/CardSize';
import CardText from '@components/Card/atoms/CardText';
import CardTop from '@components/Card/atoms/CardTop';
import InputContainer from '@components/CardForm/atoms/InputContainer';
import InputUnderLine from '@components/CardForm/atoms/InputUnderLine';

type AddCardCompletedProps = {
  onNext: () => void;
};

export default function AddCardCompleted({ onNext }: AddCardCompletedProps) {
  return (
    <div className='root'>
      <div className='app flex-column-center'>
        <HStack>
          <PageTitle className='mb-10'>카드등록이 완료되었습니다.</PageTitle>
        </HStack>

        <CardBox>
          <CardSize size='big'>
            <CardTop>
              <CardText fontSize='big'>클린카드</CardText>
            </CardTop>

            <CardMiddle>
              <CardSize size='big' chip></CardSize>
            </CardMiddle>

            <CardBottom>
              <CardBottom as='number'>
                <CardText fontSize='big'>1111 - 2222 - oooo - oooo</CardText>
              </CardBottom>
              <CardBottom as='info'>
                <CardText fontSize='big'>Seung Hyun</CardText>
                <CardText fontSize='big'>03 / 24</CardText>
              </CardBottom>
            </CardBottom>
          </CardSize>
        </CardBox>

        <InputContainer size='w-100'>
          <HStack>
            <InputUnderLine
              className='w-75'
              type='text'
              placeholder='카드의 별칭을 입력해주세요.'
            ></InputUnderLine>
          </HStack>
        </InputContainer>

        <Button className='mt-50' onClick={onNext}>
          다음
        </Button>
      </div>
    </div>
  );
}
