import { css, cx } from '@emotion/css';

import { CompanyColor } from 'components/domain';

import { CardCompany } from 'types/card';

interface CardCompanyPickerProps {
  updateCompany: (company: CardCompany) => void;
}

function CardCompanyPicker({ updateCompany }: CardCompanyPickerProps) {
  return (
    <div className="modal-dimmed">
      <div className="modal">
        <div
          className={cx(
            'flex-center',
            css`
              flex-wrap: wrap;
            `
          )}
        >
          {Object.values(CardCompany).map((company) => (
            <CompanyColor key={company} company={company} onClick={() => updateCompany(company)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardCompanyPicker;
