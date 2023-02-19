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
        width: 47px;
        cursor: pointer;
      `}
    >
      <div
        className={css`
          width: 37px;
          height: 37px;
          border-radius: 50px;
          background-color: ${theme[company]};
          margin: 0 0 10px;
        `}
      ></div>
      <p
        className={css`
          color: #525252;
          font-size: 12px;
          line-height: 14px;
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
