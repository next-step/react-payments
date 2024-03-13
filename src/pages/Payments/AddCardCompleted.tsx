import PageTitle from '@components/@common/PageTitle';
import Button from '@components/@common/button/molecules/Button';
import HStack from '@components/@common/layout/HStack';
import { Card } from '@components/Card/atoms/Card';
import { Input } from '@components/CardForm/atoms/Input';

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

        <Card.Box>
          <Card.Size size='big'>
            <Card.Top>
              <Card.Text fontSize='big'>클린카드</Card.Text>
            </Card.Top>

            <Card.Middle>
              <Card.Size size='big' hasChip />
            </Card.Middle>

            <Card.Bottom>
              <Card.Bottom as='number'>
                <Card.Text fontSize='big'>1111 - 2222 - oooo - oooo</Card.Text>
              </Card.Bottom>
              <Card.Bottom as='info'>
                <Card.Text fontSize='big'>Seung Hyun</Card.Text>
                <Card.Text fontSize='big'>03 / 24</Card.Text>
              </Card.Bottom>
            </Card.Bottom>
          </Card.Size>
        </Card.Box>

        <Input.Container size='w-100'>
          <HStack>
            <Input.Underline
              className='w-75'
              type='text'
              placeholder='카드의 별칭을 입력해주세요.'
            ></Input.Underline>
          </HStack>
        </Input.Container>

        <Button className='mt-50' onClick={onNext}>
          다음
        </Button>
      </div>
    </div>
  );
}
