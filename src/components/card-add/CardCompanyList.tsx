import { Dispatch, SetStateAction } from 'react';

import CardCompanyListRow from './CardCompanyListRow';

type CardCompanyListProps = {
  setCardCompany: Dispatch<SetStateAction<string>>;
  setCardCompanyColor: Dispatch<SetStateAction<string>>;
};

const ROWS = [
  { start: 0, end: 4 },
  { start: 4, end: 8 },
];

export default function CardCompanyList({
  setCardCompany,
  setCardCompanyColor,
}: CardCompanyListProps) {
  return (
    <div className="modal-dimmed">
      <div className="modal">
        {ROWS.map((row) => (
          <CardCompanyListRow
            key={row.start}
            start={row.start}
            end={row.end}
            setCardCompany={setCardCompany}
            setCardCompanyColor={setCardCompanyColor}
          />
        ))}
      </div>
    </div>
  );
}
