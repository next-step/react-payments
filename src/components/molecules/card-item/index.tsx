import { memo, PropsWithChildren, useCallback } from 'react';
import { Button } from '../../atoms';

interface ICardItem {
  nickname: string;
  onClickChildren?: (cardNumber: string) => void;
  onClickButton?: (cardNumber: string) => void;
  cardNumber: string;
  buttonText?: string;
}

function CardItem({
                    children,
                    nickname,
                    onClickChildren,
                    onClickButton,
                    cardNumber,
                    buttonText
                  }: PropsWithChildren<ICardItem>) {
  const handleClickChildren = useCallback(() => {
    onClickChildren(cardNumber);
  }, []);

  const handleClickButton = useCallback(() => {
    onClickButton(cardNumber);
  }, []);

  return (
    <div>
      <div className="flex-column-center" onClick={handleClickChildren}>
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
