import Input from '../atoms/Input';
import Title from '../atoms/Title';
import CardPreview from '../molecules/CardPreview';
import Footer from '../organisms/Footer';
import {
  MSG_COMPLETE_CARD_REGISTRATION,
  MSG_INPUT_CARD_NICKNAME,
} from '../../constants/messages';

function SaveCard(props) {
  const { data: card } = props;

  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <Title extraClassName="mb-10" title={MSG_COMPLETE_CARD_REGISTRATION} />
      </div>
      <div className="card-box">
        <CardPreview card={card} size="big" />
      </div>
      <div className="input-container flex-center w-100">
        <Input
          className="input-underline"
          extraClassName="w-75"
          type="text"
          placeholder={MSG_INPUT_CARD_NICKNAME}
        />
      </div>
      <Footer extraClassName="mt-50" />
    </div>
  );
}

export default SaveCard;
