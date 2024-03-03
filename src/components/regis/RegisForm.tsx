import Label from '../common/label/Label.tsx';
import Input from '../common/input/Input.tsx';
import * as S from '../../pages/regis/RegisPage.style.ts';

const RegisForm = () => {
  return (
    <form>
      <Label left={'카드번호'}>
        <Input />
      </Label>
      <Label left={'만료일'}>
        <Input placeholder={'MM / YY'} style={{ width: '40%' }} />
      </Label>

      <Label left={'카드 소유자 이름 (선택)'} right={'0 / 30'}>
        <Input placeholder={'카드에 표시된 이름과 동일하게 입력하세요.'} maxLength={30} />
      </Label>
      <Label left={'보안 코드(CVC/CCV)'}>
        <Input style={{ width: '25%' }} maxLength={3} />
      </Label>

      <Label left={'카드 비밀번호'}>
        <Input style={{ width: '48px' }} maxLength={1} />
        <Input style={{ width: '48px' }} maxLength={1} />
        <S.Dot />
        <S.Dot />
      </Label>
    </form>
  );
};

export default RegisForm;
