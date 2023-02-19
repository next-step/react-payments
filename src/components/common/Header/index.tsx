import { ReactNode } from 'react';
import { css } from '@emotion/css';

export interface HeaderProps {
  prefix?: ReactNode;
  title: string;
}

function Header({ prefix, title }: HeaderProps) {
  return (
    <h2
      className={css`
        display: flex;
        align-items: center;
        gap: 18px;
      `}
    >
      {prefix}
      <span
        className={css`
          font-weight: 500;
          font-size: 20px;
          line-height: 22px;
          display: flex;
          align-items: center;

          color: #383838;
        `}
      >
        {title}
      </span>
    </h2>
  );
}

export default Header;
