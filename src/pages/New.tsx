import { useNavigate } from 'react-router-dom';
import Card from 'src/components/Card';
import Header from 'src/components/Header';
import Input from 'src/components/Input';
import TextButton from 'src/components/TextButton';

const New = () => {
  const navigate = useNavigate();
  const goNextPage = () => {
    navigate('/alias', { replace: true });
  };
  return (
    <>
      <Header
        title="카드 추가"
        hasBackButton
        backButtonPress={() => navigate(-1)}
      />
      <Card />
      <Input label="카드 번호" widthSize="lg" />
      <Input label="만료일" widthSize="md" />
      <Input label="카드 소유자 이름(선택)" textAlign="left" />
      <Input label="보안 코드(CVC/CVV)" widthSize="sm" />
      <TextButton text="다음" onClick={goNextPage} />
    </>
  );
};

export default New;
