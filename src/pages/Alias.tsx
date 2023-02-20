import { useNavigate } from 'react-router-dom';
import Card from 'src/components/Card';
import TextButton from 'src/components/TextButton';

const Alias = () => {
  const navigate = useNavigate();

  const okayButtonPress = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className="alias-page">
      <div className="alias-page-title">카드 등록이 완료되었습니다.</div>
      <Card />
      <input className="alias-input" />
      <TextButton text="확인" onClick={okayButtonPress} />
    </div>
  );
};

export default Alias;
