import { Dispatch, SetStateAction } from 'react';

type CardCompanyItem = {
  name: string;
  backgroundColor: string;
};

const CARD_COMPANY_LIST: CardCompanyItem[] = [
  {
    backgroundColor: '#E24141',
    name: '포코',
  },
  {
    backgroundColor: '#547CE4',
    name: '준',
  },
  {
    backgroundColor: '#73BC6D',
    name: '현석',
  },
  {
    backgroundColor: '#DE59B9',
    name: '윤호',
  },
  {
    backgroundColor: '#04C09E',
    name: '환오',
  },
  {
    backgroundColor: '#F37D3B',
    name: '태은',
  },
  {
    backgroundColor: '#E76E9A',
    name: '준일',
  },
  {
    backgroundColor: '#FBCD58',
    name: '은규',
  },
];

type CardCompanyListRowProps = {
  start: number;
  end: number;
  setCardCompany: Dispatch<SetStateAction<string>>;
  setCardCompanyColor: Dispatch<SetStateAction<string>>;
};

export default function CardCompanyListRow({
  start,
  end,
  setCardCompany,
  setCardCompanyColor,
}: CardCompanyListRowProps) {
  const handleClickCompany = (cardCompany: CardCompanyItem) => {
    setCardCompany(cardCompany.name);
    setCardCompanyColor(cardCompany.backgroundColor);
  };

  return (
    <div className="flex-center">
      {CARD_COMPANY_LIST.slice(start, end).map((cardCompany) => {
        const { name, backgroundColor } = cardCompany;

        return (
          <div
            className="modal-item-container"
            key={name}
            onClick={() => handleClickCompany(cardCompany)}
          >
            <div className="modal-item-dot" style={{ backgroundColor }}></div>
            <span className="modal-item-name">{name} 카드</span>
          </div>
        );
      })}
    </div>
  );
}
