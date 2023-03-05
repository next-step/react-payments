import { Link } from 'react-router-dom';
import { css } from '@emotion/css';

import { Card } from 'components/domain';
import { Button } from 'components/common';

import { useCardActions } from 'contexts/CardContextProvider/hooks';

import { PATHS } from 'constants/router';
import { ICard } from 'types/card';

const CONFIRM_MESSAGE = '정말로 등록된 카드를 삭제하시겠습니까?';

interface HodingCardProps {
  card: ICard;
}

function HoldingCard({ card }: HodingCardProps) {
  const { deleteCard } = useCardActions();

  const handleClickDeleteButton = () => {
    const isCanDeleted = window.confirm(CONFIRM_MESSAGE);

    if (isCanDeleted) {
      deleteCard(card);
    }
  };

  return (
    <div>
      <Link to={PATHS.CONFIRM} state={card}>
        <Card {...card} />
      </Link>
      <div
        className={css`
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <span className="card-nickname">{card.alias}</span>
        <Button onClick={handleClickDeleteButton}>❌</Button>
      </div>
    </div>
  );
}

export default HoldingCard;
