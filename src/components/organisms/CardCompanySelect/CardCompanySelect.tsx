import { Dispatch, SetStateAction } from 'react';
import useOverlay from '@/hooks/useOverlay';
import { BottomSheet } from '@components/molecules/BottomSheet/BottomSheet';
import CardCompany from '@components/organisms/CardCompany/CardCompany';
import { CardCompany as CardCompanyType } from '@/type/cardType';
import { FormValues } from '@/type/formType';

interface CardCompanySelect {
  onChange: Dispatch<SetStateAction<FormValues>>;
  onAutoFocus?: () => void;
}

export default function CardCompanySelect({
  onChange,
  onAutoFocus,
}: CardCompanySelect) {
  const { close: closeBottomSheet } = useOverlay();

  const handleCompanyClick = (company: CardCompanyType) => {
    onChange((prevCardInfo) => ({
      ...prevCardInfo,
      cardCompany: company,
    }));

    onAutoFocus?.();
    closeBottomSheet();
  };

  return (
    <BottomSheet.Root>
      <BottomSheet.Dimmer>
        <BottomSheet.Content style='modal-grid'>
          <CardCompany onCardCompanyClick={handleCompanyClick} />
        </BottomSheet.Content>
      </BottomSheet.Dimmer>
    </BottomSheet.Root>
  );
}
