import { useNavigate } from 'react-router-dom';

const List = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate('/new');
      }}
    >
      카드 추가
    </button>
  );
};

export default List;
