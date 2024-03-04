import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import InputContainer from '../../components/InputContainer/InputContainer';
import {
  CARD_KEY,
  getLocalStorageItem,
  setLocalStorageItem,
} from '../../utils/localStorage';
import useNickname from './hooks/useNickname';

interface Props {
  onNext: () => void;
}

const AddCardSuccess = ({ onNext }: Props) => {
  const { nickname, handleNickname } = useNickname();
  const cards = getLocalStorageItem({ key: 'cards' });

  const handleAddCard = () => {
    const card = cards[cards.length - 1];
    card.nickname = nickname;
    setLocalStorageItem({ key: CARD_KEY, item: [...cards, card] });
    onNext();
  };

  return (
    <>
      <div className='app flex-column-center'>
        <div className='flex-center'>
          <Header className='mb-10'>
            <span>카드등록이 완료되었습니다.</span>
          </Header>
        </div>

        <Card size='big' {...cards[cards.length - 1]} />

        <InputContainer className='input-container flex-center w-100'>
          <Input
            className='input-underline w-75'
            type='text'
            placeholder='카드의 별칭을 입력해주세요.'
            value={nickname}
            onChange={handleNickname}
          />
        </InputContainer>

        <div className='button-box mt-50'>
          <Button onClick={handleAddCard}>확인</Button>
        </div>
      </div>
    </>
  );
};

export default AddCardSuccess;
