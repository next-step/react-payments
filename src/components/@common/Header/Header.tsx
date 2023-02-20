import { PropsWithChildren } from 'react';

import useRouter from 'routes/useRouter';
import { ReactComponent as BackIcon } from 'assets/BackIcon.svg';

import type { HeaderProps } from './Header.types';
import * as Styled from './Header.styled';

const Header = ({ showBackIcon, children }: PropsWithChildren<HeaderProps>) => {
  const { push } = useRouter();

  return (
    <Styled.Header as="header" display="flex">
      {showBackIcon && <BackIcon onClick={() => push('/card-list')} />}
      {children}
    </Styled.Header>
  );
};

export default Header;
