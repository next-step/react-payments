import Input from '../atoms/Input';
import Title from '../atoms/Title';
import CardPreview from '../molecules/CardPreview';
import Footer from '../organisms/Footer';

function SaveCard(props) {
  const { data: card } = props;

  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <Title extraClassName="mb-10" title="카드등록이 완료되었습니다." />
      </div>
      <div className="card-box">
        <CardPreview card={card} size="big" />
      </div>
      <div className="input-container flex-center w-100">
        <Input
          className="input-underline"
          extraClassName="w-75"
          type="text"
          placeholder="카드의 별칭을 입력해주세요."
        />
      </div>
      <Footer extraClassName="mt-50" />
    </div>
  );
}

export default SaveCard;
