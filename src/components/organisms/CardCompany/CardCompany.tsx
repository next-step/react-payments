import { Input } from '@components/molecules/Input/Input';
import { CardCompany as CardCompanyType } from '@/type/cardType';

const CARD_COMPANIES: CardCompanyType[] = [
  { id: 1, name: '신한 카드', color: '#E24141' },
  { id: 2, name: '삼성 카드', color: '#547CE4' },
  { id: 3, name: '하나 카드', color: '#73BC6D' },
  { id: 4, name: '국민 카드', color: '#DE59B9' },
  { id: 5, name: '우리 카드', color: '#04C09E' },
  { id: 6, name: '비씨 카드', color: '#E76E9A' },
  { id: 7, name: '현대 카드', color: '#F37D3B' },
  { id: 8, name: '롯데 카드', color: '#FBCD58' },
];

type CardCompanyProps = {
  onCardCompanyClick: (company: CardCompanyType) => void;
};

export default function CardCompany({ onCardCompanyClick }: CardCompanyProps) {
  return (
    <>
      {CARD_COMPANIES.map((company) => (
        <label
          key={company.id}
          htmlFor={company.name}
          className='modal-item-container'
        >
          <Input
            type='radio'
            id={company.name}
            name={company.name}
            className='visually-hidden'
            onChange={(e) => {
              e.stopPropagation();
              onCardCompanyClick(company);
            }}
          />
          <div
            className='modal-item-dot'
            style={{ backgroundColor: company.color }}
          />
          <span className='modal-item-name'>{company.name}</span>
        </label>
      ))}
    </>
  );
}
