import { FC, PropsWithChildren } from 'react';
import * as S from './Header.style.ts';
import ArrowLeft from '../../../assets/arrow_left.svg?react';

interface Props {
  prev?: boolean;
}

const Header: FC<PropsWithChildren<Props>> = ({ prev, children }) => {
  return (
    <S.Container>
      {prev && (
        <S.PrevButton onClick={() => history.back()} type={'button'}>
          <ArrowLeft />
        </S.PrevButton>
      )}
      <S.Text>{children}</S.Text>
    </S.Container>
  );
};

export default Header;
