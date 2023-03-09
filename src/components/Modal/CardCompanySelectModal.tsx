import { CARD_COMPANY_LIST } from '@/constants';
import { CardCompany } from '../Common';
import { useCardFormHandler } from '@/context/CardFormContext';

function CardCompanySelectModal() {
  const { updateCardForm } = useCardFormHandler();
  const onClick = (cardCompany: string) => {
    updateCardForm({ cardCompany });
  };

  return (
    <div className="absolute bottom-0 w-full h-60 bg-white rounded-t-2xl p-4">
      <div className="h-full flex justify-between flex-wrap items-center">
        {CARD_COMPANY_LIST.map(cardCompany => (
          <div key={cardCompany.companyName} className="w-1/4 flex justify-center items-center">
            <CardCompany
              name={cardCompany.companyName}
              value={cardCompany.companyName}
              bgColor={cardCompany.companyColorHexCode}
              onClick={onClick}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardCompanySelectModal;
