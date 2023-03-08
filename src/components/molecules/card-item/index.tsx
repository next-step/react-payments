import { memo, PropsWithChildren, useCallback } from 'react';
import { Button } from '../../atoms';

interface ICardItem {
  nickname: string;
  onClickButton?: (cardNumber: string) => void;
  cardNumber: string;
  buttonText?: string;
}

function CardItem({ children, nickname, onClickButton, cardNumber, buttonText }: PropsWithChildren<ICardItem>) {
  const handleClickButton = useCallback(() => {
    onClickButton(cardNumber);
  }, []);

  return (
    <div>
      <div className="flex-column-center">
        {children}
        <span>{nickname}</span>
      </div>
      {buttonText && (
        <Button onClick={handleClickButton}>{buttonText}</Button>
      )}
    </div>
  );
}

export default memo(CardItem);
