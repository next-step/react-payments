import React, { useContext } from 'react';
import { ModalContext } from 'src/contexts/ModalContext';
import { INewCardBank } from 'src/utils/types';

interface BankBottomSheetProps {
  bankList: INewCardBank[];
  handleBankTitle: (title: string) => void;
  handleBgColor: (color: string) => void;
}

const BankBottomSheet = ({
  bankList,
  handleBankTitle,
  handleBgColor,
}: BankBottomSheetProps) => {
  const { handleOpen } = useContext(ModalContext);
  const handleBank = (bank: INewCardBank) => {
    handleBankTitle(bank.title);
    handleBgColor(bank.bgColor);
    handleOpen(false);
  };
  return (
    <div className="bottom-sheet-new-card-container">
      {bankList.map(bank => (
        <div
          key={bank.title}
          className="bottom-sheet-new-card-item"
          onClick={() => handleBank(bank)}
        >
          <div
            className="bottom-sheet-new-card-item-bgcolor"
            style={{ background: bank.bgColor }}
          />
          <div className="bottom-sheet-new-card-item-title">{bank.title}</div>
        </div>
      ))}
    </div>
  );
};

export default BankBottomSheet;
