import Header from '../../components/common/header/Header.tsx';
import * as S from './RegisPage.style.ts';
import Button from '../../components/common/button/Button.tsx';
import RegisForm from '../../components/regis/RegisForm.tsx';
import { useNavigate } from 'react-router-dom';
import { PAGES } from '../../routes/route.constant.ts';
const RegisPage = () => {
  const navigation = useNavigate();

  return (
    <>
      <Header prev>카드 추가</Header>
      <RegisForm />
      <S.Bottom>
        <Button onClick={() => navigation(PAGES.COMPLETE)}>다음</Button>
      </S.Bottom>
    </>
  );
};

export default RegisPage;
