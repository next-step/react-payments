import { FC, PropsWithChildren, ReactNode } from 'react';
import * as S from './Label.style.ts';

interface Props {
  left: ReactNode;
  right?: ReactNode;
}
const Label: FC<PropsWithChildren<Props>> = ({ children, left, right }) => {
  return (
    <S.Container>
      <S.Top>
        <div>{left}</div>
        {right && <div>{right}</div>}
      </S.Top>
      <S.Body>{children}</S.Body>
    </S.Container>
  );
};
export default Label;
