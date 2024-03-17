import { Dispatch, SetStateAction } from 'react';

const CARD_COMPANY_LIST = [
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

type CardFlexCenterProps = {
  start: number;
  end: number;
  setCardCompany: Dispatch<SetStateAction<string>>;
};

function CardFlexCenter({ start, end, setCardCompany }: CardFlexCenterProps) {
  const handleClickCompany = (name: string) => {
    setCardCompany(name);
    console.log(name);
  };

  return (
    <div className="flex-center">
      {CARD_COMPANY_LIST.slice(start, end).map((cardCompany) => {
        const { name } = cardCompany;
        return (
          <div
            className="modal-item-container"
            key={name}
            onClick={() => handleClickCompany(name)}
          >
            <div className="modal-item-dot"></div>
            <span className="modal-item-name">{name} 카드</span>
          </div>
        );
      })}
    </div>
  );
}

type CardCompanyListProps = {
  setCardCompany: Dispatch<SetStateAction<string>>;
};

export default function CardCompanyList({
  setCardCompany,
}: CardCompanyListProps) {
  return (
    <div className="modal-dimmed">
      <div className="modal">
        <CardFlexCenter start={0} end={4} setCardCompany={setCardCompany} />
        <CardFlexCenter start={4} end={8} setCardCompany={setCardCompany} />
      </div>
    </div>
  );
}
