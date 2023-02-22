import { useNavigate } from 'react-router-dom';
import EmptyCard from 'src/components/EmptyCard/EmptyCard';
import TextButton from 'src/components/TextButton';

const CardAlias = () => {
  const navigate = useNavigate();

  const onClickConfirmBtn = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className="alias-page">
      <div className="alias-page-title">카드 등록이 완료되었습니다.</div>
      {/* TO DO : Change Card Component with Card Info Data */}
      <EmptyCard onClick={() => {}} />
      <input className="alias-input" />
      <TextButton onClick={onClickConfirmBtn}>확인</TextButton>
    </div>
  );
};

export default CardAlias;
