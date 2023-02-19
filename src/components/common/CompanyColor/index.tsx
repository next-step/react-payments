import { css } from '@emotion/css';

import { theme } from 'constants/colors';
import type { CardCompany } from 'types/card';

export interface CompanyColorProps {
  company: CardCompany;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

function CompanyColor({ company, onClick }: CompanyColorProps) {
  return (
    <div
      onClick={onClick}
      className={css`
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      `}
    >
      <div
        className={css`
          margin: 0.5rem 1rem;
          border-radius: 50%;
          width: 2.8rem;
          height: 2.8rem;
          background-color: ${theme[company]};
        `}
      ></div>
      <p
        className={css`
          color: #525252;
          font-size: 12px;
          line-height: 14px;
          letter-spacing: -0.04rem;
          margin: 0;
          padding: 0;
        `}
      >
        {company} 카드
      </p>
    </div>
  );
}

export default CompanyColor;
